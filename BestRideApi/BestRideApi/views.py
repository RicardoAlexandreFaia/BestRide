from django.shortcuts import redirect
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings


from .models import *
from .serializers import *
from rest_framework import status, generics

from django.contrib.auth.hashers import make_password, check_password

import boto3

class Utilizadores_operacoes(APIView):
    @api_view(['POST'])
    def confirmAccount(request):
        cidp = boto3.client('cognito-idp')
        response_confirmUser = cidp.confirm_sign_up(
            ClientId='69j3kf07uilon97nspiafgsi8c',
            Username='claudio',
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
            ClientId='69j3kf07uilon97nspiafgsi8c',
            Username=request.data['name'],
            Password=request.data['password'],
            UserAttributes=[
                {
                    'Name': "name",
                    'Value': request.data['name']
                },
                {
                    'Name': "birthdate",
                    'Value': '2021-09-21'
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
        cidp = boto3.client('cognito-idp')
        login_request = cidp.initiate_auth(
            ClientId='4tqek2provvat99l9kasnrv3u5',
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

