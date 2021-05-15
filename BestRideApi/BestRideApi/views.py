from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response


from BestRideApi.models import User
from BestRideApi.serializers import UserSerializer
from BestRideApi.models import UserInfo
from BestRideApi.serializers import UserInfoSerializaer

from rest_framework import status

from django.contrib.auth.hashers import make_password, check_password


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

    def post(self, request, format=None):
        request.data['password'] = make_password(request.data.get('password'), 'pbkdf2_sha256')
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Utilizadores_Info_operacoes(APIView):

    def get(self, request, id=None):
        if id:
            try:
                queryset = UserInfo.objects.get(iduserinfo=id)
            except UserInfo.DoesNotExist:
                return Response({'Erro: Info sobre o Utilizador nao existe'}, status=400)
            read_serializer = UserInfoSerializaer(queryset)
            return Response(read_serializer.data)
        else:
            snippets = UserInfo.objects.all()
            serializer = UserInfoSerializaer(snippets, many=True)
            return Response(serializer.data)

    @api_view(['GET'])
    def login(request,email=None,password=None):
        #Verifica o email
        if email:
            try:
                queryset = UserInfo.objects.get(email=email)
            except UserInfo.DoesNotExist:
                return Response({'O Email nao Existe'}, status=400)

        #Verifica o password
            password = make_password(password,'pbkdf2_sha256')
            if password:
                try:
                    queryset_password = User.objects.get(password=password)
                except User.DoesNotExist:
                    return Response({'Password Invalida'}, status=400)

            read_serializer = UserInfoSerializaer(queryset)
            return Response(read_serializer.data)


    def post(self, request, format=None):
        serializer = UserInfoSerializaer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
