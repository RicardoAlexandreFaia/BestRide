import logging

from botocore.exceptions import ClientError
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from rest_framework_gis.pagination import GeoJsonPagination

from environs import Env

env = Env()
env.read_env()


import boto3

class Utilizadores_operacoes(APIView):
    @api_view(['POST'])
    def confirmAccount(request):
        cidp = boto3.client('cognito-idp')
        response_confirmUser = cidp.confirm_sign_up(
            ClientId=env.str("ClientId"),
            Username='austrixpamaj@gmail.com',
            ConfirmationCode=request.data['code']
        )

        return Response("")


    def post(self, request):
        '''request.data['password'] = make_password(request.data.get('password'), 'pbkdf2_sha256')
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)'''
        client = boto3.client('cognito-idp')
        response = client.sign_up(
            ClientId=env.str("ClientId"),
            Username=request.data['name'],
            Password=request.data['password'],
            UserAttributes=[
                {
                    'Name': "name",
                    'Value': request.data['email']
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


    @api_view(['POST'])
    def login(request):
        boto3.setup_default_session(region_name='eu-west-2')
        cidp = boto3.client('cognito-idp')
        login_request = cidp.initiate_auth(
            ClientId=env.str("ClientId"),
            AuthFlow="USER_PASSWORD_AUTH",
            AuthParameters = {
                'USERNAME':request.data['email'],
                'PASSWORD':request.data['password']
            }
        )

        return Response("Login Done")



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

    @api_view(['GET'])
    def getRoadMap(request):
        Road = RoadMap.objects.all()
        pk_counter = 0
        boto3.setup_default_session(region_name='us-east-2')
        s3_client = boto3.client('s3')
        try:
            for e in Road:
                response = s3_client.generate_presigned_url('get_object',
                                                        Params={'Bucket': 'best-ride',
                                                                'Key': '' + e.image},
                                                        ExpiresIn=3200)
                e.image = response

            #Road.update(image=response)
        except ClientError as e:
            logging.error(e)


        Road_Serializer = RoadMapSerializer(Road,many=True)
        return Response(Road_Serializer.data)

    @api_view(['GET'])
    def getPointsInterest(request):
        Points = PointInterest.objects.all()
        Points_Serializer = InterestPointsSerializaer(Points,many=True)
        return Response(Points_Serializer.data)

    @api_view(['GET'])
    def getItineary(request,id):
        if id:
            Itineary = ItinearyRoute.objects.filter(road_map=id)
            Itineary_Serializer = ItinearyRouteSerializer(Itineary,many=True)
            #data = {i['interest_points']: i for i in Itineary_Serializer.data}
            return Response(Itineary_Serializer.data)
        else:
            return Response("ID missing")

