from django.shortcuts import render
from rest_framework import viewsets

from .serializers import *


class UserAPI(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()[:5]

