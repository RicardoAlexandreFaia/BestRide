from rest_framework.views import APIView
from rest_framework.response import Response
from BestRideApi.models import User
from BestRideApi.serializers import UserSerializer
from rest_framework import status

class Utilizadores_operacoes(APIView):

  def get(self, request, chave=None):

    if chave:
      try:
        queryset = User.objects.get(iduser=chave)
      except User.DoesNotExist:
        return Response({'Erro: Utilizador nao existe'}, status=400)
      read_serializer = UserSerializer(queryset)
      return Response(read_serializer.data)
    else:
      snippets = User.objects.all()
      serializer = UserSerializer(snippets, many=True)
      return Response(serializer.data)

  def post(self, request, format=None):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


