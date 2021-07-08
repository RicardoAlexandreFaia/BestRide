# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.gis.db import models

class PointInterest(models.Model):
    idpercurso = models.AutoField(db_column='idPercurso', primary_key=True)  # Field name made lowercase.
    description = models.CharField(max_length=45, blank=True, null=True)
    location = models.GeometryField()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'Point_Interest'


class ItinearyRoute(models.Model):
    interest_points = models.ForeignKey(PointInterest, models.DO_NOTHING, db_column='interest_points')
    road_map = models.ForeignKey('RoadMap', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'itineary_route'
        unique_together = (('id', 'interest_points', 'road_map'),)


class ItinearyRouteInterestPoints(models.Model):
    id = models.BigAutoField(primary_key=True)
    itinearyroute_id = models.IntegerField()
    pointinterest_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'itineary_route_interest_points'


class RoadMap(models.Model):
    description = models.CharField(max_length=1000, blank=True, null=True)
    price = models.CharField(max_length=100, blank=True, null=True)
    duration = models.CharField(max_length=100, blank=True, null=True)
    image = models.CharField(max_length=100, blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    location = models.GeometryField()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'road_map'
