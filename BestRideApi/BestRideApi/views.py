import logging

from botocore.exceptions import ClientError
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from rest_framework_gis.pagination import GeoJsonPagination
from django.contrib.gis.geos import Point
from environs import Env
import math



env = Env()
env.read_env()


import boto3


class Utilizadores_operacoes(APIView):


    @api_view(['POST'])
    def resend_code(request):
        boto3.setup_default_session(region_name='eu-west-2')
        client = boto3.client('cognito-idp')

        try:
            response = client.resend_confirmation_code(
                ClientId=env.str("CLIENT_ID"),
                Username=request.data['email'])

            return JsonResponse(response)

        except client.exceptions.TooManyRequestsException:
            return Response("Too Many Requests", status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.LimitExceededException:
            return Response("Limit Exceeded", status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.InvalidEmailRoleAccessPolicyException:
            return Response("Invalid Email Role", status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.CodeDeliveryFailureException:
            return Response("Code not Delivered", status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.UserNotFoundException:
            return Response("User Not Found", status=status.HTTP_404_NOT_FOUND)




    @api_view(['POST'])
    def confirmAccount(request):
        boto3.setup_default_session(region_name='eu-west-2')
        cidp = boto3.client('cognito-idp')

        try:
            response_confirmUser = cidp.confirm_sign_up(
                ClientId=env.str("CLIENT_ID"),
                Username=request.data['email'],
                ConfirmationCode=request.data['code']
            )
            return Response(response_confirmUser)

        except cidp.exceptions.NotAuthorizedException:
            return Response("Not Authorized", status=status.HTTP_404_NOT_FOUND)
        except cidp.exceptions.UserNotFoundException:
            return Response("User Not Found", status=status.HTTP_404_NOT_FOUND)
        except cidp.exceptions.LimitExceededException:
            return Response("Limit has Exceeded", status=status.HTTP_404_NOT_FOUND)
        except cidp.exceptions.CodeMismatchException:
            return Response("Code Mismatch", status=status.HTTP_404_NOT_FOUND)
        except cidp.exceptions.ExpiredCodeException:
            return Response("Code had Expired", status=status.HTTP_404_NOT_FOUND)

    @api_view(['GET'])
    def getUser(request,token):
        boto3.setup_default_session(region_name='eu-west-2')
        cidp = boto3.client('cognito-idp')

        try:
            response = cidp.get_user(
                AccessToken = token
            )

            return Response(response)
        except cidp.exceptions.UserNotFoundException:
            return Response("User Not Found", status=status.HTTP_404_NOT_FOUND)
        except cidp.exceptions.NotAuthorizedException:
            return Response("Wrong Acess Token", status=status.HTTP_404_NOT_FOUND)

    @api_view(['POST'])
    def cancelAccount(request):
        boto3.setup_default_session(region_name='eu-west-2')
        client = boto3.client('cognito-idp')
        try:
            client.delete_user(
                AccessToken = request.data['token']
            )
            return Response("User eliminated !")
        except client.exceptions.UserNotFoundException:
            return Response("User Not Found", status=status.HTTP_400_BAD_REQUEST)







    def post(self, request):
        boto3.setup_default_session(region_name='eu-west-2')
        client = boto3.client('cognito-idp')
        try:
            response = client.sign_up(
                ClientId=env.str('ClientId'),
                Username=request.data['email'],
                Password=request.data['password'],
                UserAttributes=[
                    {
                        'Name': "name",
                        'Value': request.data['name']
                    },
                    {
                        'Name': "birthdate",
                        'Value': request.data['dob']
                    },
                    {
                        'Name': "email",
                        'Value': request.data['email']
                    },
                    {
                        'Name': "gender",
                        'Value': request.data['gender']
                    },
                    {
                        'Name': "address",
                        'Value': request.data['adress']
                    },
                    {
                        'Name': "locale",
                        'Value': request.data['city']
                    },
                    {
                        'Name': "phone_number",
                        'Value': request.data['phone_number']
                    },
                ],
            )
            return JsonResponse(response)

        except client.exceptions.InvalidPasswordException:
            return Response("Invalid Password Format",status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.UsernameExistsException:
            return Response("Username already Exists !", status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.CodeDeliveryFailureException:
            return Response("Error on send Code !", status=status.HTTP_404_NOT_FOUND)




    @api_view(['POST'])
    def login(request):
        boto3.setup_default_session(region_name='eu-west-2')
        cidp = boto3.client('cognito-idp')

        try:
            login_request = cidp.initiate_auth(
                ClientId=env.str("CLIENT_ID"),
                AuthFlow="USER_PASSWORD_AUTH",
                AuthParameters={
                    'USERNAME': request.data['email'],
                    'PASSWORD': request.data['password']
                }
            )

            return Response(login_request,status=status.HTTP_200_OK)

        except cidp.exceptions.NotAuthorizedException:
            return Response("Incorrect username or password",status=status.HTTP_404_NOT_FOUND)

    def loginGoogle(request):
        boto3.setup_default_session(region_name='eu-west-2')
        cidp = boto3.client('cognito-idp')
        response = cidp.get_id(
            AccountId='YOUR AWS ACCOUNT ID',
            IdentityPoolId='us-east-1:xxxdexxx-xxdx-xxxx-ac13-xxxxf645dxxx',
            Logins={
                'accounts.google.com': 'google returned IdToken'
            })

        return Response(response)






class TranslateAWS():

    @api_view(['POST'])
    def translate(request):
        client = boto3.client('translate')
        response = client.translate_text(
            Text=request.data['text'], SourceLanguageCode=request.data['sourceLang'],
            TargetLanguageCode=request.data['outputLang'])

        return JsonResponse({
            "translated_text": response['TranslatedText']
        })

class Routes(APIView):

    @api_view(['POST'])
    def getRoadMap(request):
        KM_MAX = request.data['kmMAX']
        Road = RoadMap.objects.all()
        boto3.setup_default_session(region_name='us-east-2')
        s3_client = boto3.client('s3')

        distance_dict = {}

        for rd in Road:
            p1 = Point(request.data['lat'],request.data['lng'])
            p2 = Point(rd.location.coords[0],rd.location.coords[1])
            distance = p1.distance(p2)
            distance_in_km = math.trunc(distance * 100)
            distance_dict[str(rd.title)] = distance_in_km

        for name,km in distance_dict.items():
            if km > KM_MAX:
                Road = Road.exclude(title=name)

        try:
            for e in Road:
                response = s3_client.generate_presigned_url('get_object',
                                                        Params={'Bucket': 'best-ride',
                                                                'Key': '' + e.image},
                                                        ExpiresIn=3200)
                e.image = response

        except ClientError as e:
            logging.error(e)

        Road_Serializer = RoadMapSerializer(Road,many=True)
        return Response(Road_Serializer.data)



    @api_view(['POST'])
    def distance(request):
        Road = RoadMap.objects.all()

        distance_dict = {}

        for rd in Road:
            p1 = Point(request.data['lat'],request.data['lng'])
            p2 = Point(rd.location.coords[0],rd.location.coords[1])
            distance = p1.distance(p2)
            distance_in_km = math.trunc(distance * 100)
            distance_dict[str(rd.title)] = distance_in_km


        return JsonResponse(distance_dict)

    @api_view(['GET'])
    def getPointsInterest(request):
        boto3.setup_default_session(region_name='us-east-2')
        s3_client = boto3.client('s3')
        Points = PointInterest.objects.all()

        try:
            for point in Points:
                response = s3_client.generate_presigned_url('get_object',
                                                        Params={'Bucket': 'best-ride',
                                                                'Key': '' + point.image},
                                                        ExpiresIn=3200)
                point.image = response
        except ClientError as e:
            logging.error(e)

        Points_Serializer = InterestPointsSerializaer(Points,many=True)
        return Response(Points_Serializer.data)

    @api_view(['GET'])
    def getItineary(request,id):
        if id:
            Itineary = ItinearyRoute.objects.filter(road_map=id)
            boto3.setup_default_session(region_name='us-east-2')
            s3_client = boto3.client('s3')

            try:
                for ip in Itineary:
                    response = s3_client.generate_presigned_url('get_object',
                                                                Params={'Bucket': 'best-ride',
                                                                        'Key': '' + ip.interest_points.image},
                                                                ExpiresIn=3200)
                    ip.interest_points.image = response
            except ClientError as e:
                logging.error(e)


            Itineary_Serializer = ItinearyRouteSerializer(Itineary,many=True)
            return Response(Itineary_Serializer.data)
        else:
            return Response("ID missing")

    @api_view(['GET'])
    def getRoadVehicle(request,id):
        if id:
            roadVehicle = RoadVehicle.objects.all().filter(road_map=id)
            roadvehicleSerializer = RoadVehicleSerializer(roadVehicle,many=True)
            return Response(roadvehicleSerializer.data)
        else:
            return Response("ID Missing")

