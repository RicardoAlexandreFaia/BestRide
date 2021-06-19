from rest_framework import serializers
from .models import *



class InterestPointsSerializaer(serializers.ModelSerializer):
    class Meta:
        model = PointInterest
        fields = ('__all__')

class RoadMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoadMap
        fields = '__all__'

class ItinearyRouteSerializer(serializers.ModelSerializer):
    interest_points = InterestPointsSerializaer(read_only=True)
    class Meta:
        model = ItinearyRoute
        fields = ('interest_points',)