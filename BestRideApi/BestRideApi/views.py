from django.shortcuts import redirect
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings


from .models import User, Recoveraccount,  TuristInfo
from .serializers import UserSerializer, UserInfoSerializaer, RecoverAccountSerializaer, UserRoleSerializer
from rest_framework import status

from django.contrib.auth.hashers import make_password, check_password

import boto3

class Utilizadores_operacoes(APIView):
    def get(self, request, id=None):
        if id:
            try:
                queryset = User.objects.get(iduser=id)
            except User.DoesNotExist:
                return Response({'Erro: Utilizador nao existe'}, status=400)
            read_serializer = UserSerializer(queryset)
            return Response(read_serializer.data)
        else:
            snippets = User.objects.all()
            serializer = UserSerializer(snippets, many=True)
            return Response(serializer.data)

    @api_view(['POST'])
    def confirmAccount(request):
        cidp = boto3.client('cognito-idp')
        response_confirmUser = cidp.confirm_sign_up(
            ClientId='2vqne4mc8r531sjqisriu5u1kn',
            Username='claudio',
            ConfirmationCode=request.data['code']
        )

        return Response("oLA")


    def post(self, request):
        '''request.data['password'] = make_password(request.data.get('password'), 'pbkdf2_sha256')
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)'''
        client = boto3.client('cognito-idp')
        response = client.sign_up(
            ClientId='2vqne4mc8r531sjqisriu5u1kn',
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

    def put(self, request, id=None):
        try:
            # Check if the todo item the user wants to update exists
            user = User.objects.get(iduser=id)
        except User.DoesNotExist:
            # If the todo item does not exist, return an error response
            return Response({'errors': 'This todo item does not exist.'}, status=400)

        # If the todo item does exists, use the serializer to validate the updated data
        request.data['password'] = make_password(request.data.get('password'), 'pbkdf2_sha256')
        update_serializer = UserSerializer(user, data=request.data)


        # If the data to update the todo item is valid, proceed to saving data to the database
        if update_serializer.is_valid():
            # Data was valid, update the todo item in the database
            userobject = update_serializer.save()

            # Serialize the todo item from Python object to JSON format
            read_serializer = UserSerializer(userobject)

            # Return a HTTP response with the newly updated todo item
            return Response(read_serializer.data, status=200)

        # If the update data is not valid, return an error response
        return Response(update_serializer.errors, status=400)

    @api_view(['POST'])
    def deleteAccount(request):
        id = request.data['id']
        try:
            queryset = User.objects.filter(pk=id).delete()
        except User.DoesNotExist:
            return Response({'Erro: Info sobre o Utilizador nao existe'}, status=400)
        return Response({'Erro: Info sobre o Utilizador foi eliminada'}, status=101)


class UserRole(APIView):
    def post(self, request, format=None):
        serializer = UserRoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Utilizadores_Info_operacoes(APIView):

    def get(self, request, id=None):
        if id:
            try:
                queryset = TuristInfo.objects.get(user_iduser=id)
            except TuristInfo.DoesNotExist:
                return Response({'Erro: Info sobre o Utilizador nao existe'}, status=400)
            read_serializer = UserInfoSerializaer(queryset)
            return Response(read_serializer.data)
        else:
            snippets = TuristInfo.objects.all()
            serializer = UserInfoSerializaer(snippets, many=True)
            return Response(serializer.data)

    @api_view(['POST'])
    def login(request):
        cidp = boto3.client('cognito-idp')
        response_confirmUser = cidp.confirm_sign_up(
            ClientId='2vqne4mc8r531sjqisriu5u1kn',
            Username='claudio',
            ConfirmationCode='845590'
        )

        return Response("oLA")


    def post(self, request, format=None):
        serializer = UserInfoSerializaer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @api_view(['POST'])
    def deleteAccount(request):
        email = request.data['email']
        try:
            queryset = TuristInfo.objects.filter(email=email).delete()
        except TuristInfo.DoesNotExist:
            return Response({'Erro: Info sobre o Utilizador nao existe'}, status=400)
        return Response({'Erro: Info sobre o Utilizador foi eliminada'}, status=101)

class Recover_Account(APIView):
#Para enviar email com o codigo para a recuperação da Pass

    def get(self, request, id):
        if id:
            try:
                queryset = Recoveraccount.objects.get(idrecuperarconta=id)
            except Recoveraccount.DoesNotExist:
                return Response({'Erro: Info sobre o Utilizador nao existe'}, status=400)
            read_serializer = RecoverAccountSerializaer(queryset)
            return Response(read_serializer.data)
        else:
            snippets = Recoveraccount.objects.all()
            serializer = RecoverAccountSerializaer(snippets, many=True)
            return Response(serializer.data)

    def post(self, request, format=None):
        email = request.data['email']
        try:
            queryset = TuristInfo.objects.get(email=email)
        except TuristInfo.DoesNotExist:
            return Response({'O Email nao Existe'}, status=400)

        serializer = RecoverAccountSerializaer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @api_view(['POST'])
    def sendEmail(request):
        email = request.data['email']
        code = request.data['code']

        try:
            queryset = TuristInfo.objects.get(email=email)
        except TuristInfo.DoesNotExist:
            return Response({'O Email nao Existe'}, status=400)

        subject = "Código BestRide"
        message = "O seu código para recuperar a sua conta Best Ride é:\n" + str(code)
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email]
        send_mail(subject, message, email_from, recipient_list)
        return Response({'O Email enviado'}, status=200)

    @api_view(['POST'])
    def codeVerification(request):
        try:
            queryset = Recoveraccount.objects.get(code=request.data['code'])
        except Recoveraccount.DoesNotExist:
            return Response({'Erro: Info sobre o Codigo nao existe'}, status=400)
        return Response({'O codigo foi aceite'}, status=200)


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
