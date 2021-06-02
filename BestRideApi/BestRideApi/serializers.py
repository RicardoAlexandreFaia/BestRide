from rest_framework import serializers
from BestRideApi.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class UserInfoSerializaer(serializers.ModelSerializer):
    class Meta:
        model = TuristInfo
        fields = ('__all__')

class UserRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRoles
        fields = ('__all__')