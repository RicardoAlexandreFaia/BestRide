from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class UserInfoSerializaer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('__all__')

class RecuperarContaSerializaer(serializers.ModelSerializer):
    class Meta:
        model = RecuperarConta
        fields = ('__all__')