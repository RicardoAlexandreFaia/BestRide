from rest_framework.views import APIView
from rest_framework.response import Response
from BestRideApi.models import User
from BestRideApi.serializers import UserSerializer
from rest_framework import status

from django.contrib.auth.hashers import make_password, check_password


class Utilizadores_operacoes(APIView):

    def get(self, request, password=None):
        password = make_password(password)
        if password:
            try:
                if check_password(request.data['password'], password):
                    queryset = User.objects.get(password=password)
            except User.DoesNotExist:
                return Response({'Erro: Utilizador nao existe'}, status=400)
            read_serializer = UserSerializer(queryset)
            return Response(read_serializer.data)
        else:
            snippets = User.objects.all()
            serializer = UserSerializer(snippets, many=True)
            return Response(serializer.data)

    def post(self, request, format=None):
        request.data['password'] = make_password(request.data.get('password'))
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
