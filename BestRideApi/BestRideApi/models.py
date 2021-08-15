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
    location = models.GeometryField(blank=True, null=True)
    image = models.CharField(max_length=322, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Point_Interest'


class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    email = models.CharField(max_length=255, blank=True, null=True)
    image = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'User'


class City(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'city'


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
    id = models.OneToOneField(City, models.DO_NOTHING, db_column='id', primary_key=True)
    description = models.CharField(max_length=1000, blank=True, null=True)
    price = models.CharField(max_length=100, blank=True, null=True)
    duration = models.CharField(max_length=100, blank=True, null=True)
    image = models.CharField(max_length=322, blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    location = models.GeometryField(blank=True, null=True)
    city = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'road_map'


class RoadVehicle(models.Model):
    road_map = models.ForeignKey(RoadMap, models.DO_NOTHING, db_column='road_map')
    vehicle = models.ForeignKey('Vehicle', models.DO_NOTHING, db_column='vehicle')

    class Meta:
        managed = False
        db_table = 'road_vehicle'
        unique_together = (('road_map', 'vehicle'),)


class Vehicle(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    max_cap = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vehicle'


class Travel(models.Model):
    idViagem = models.AutoField(db_column='idViagem', primary_key=True)  # Field name made lowercase.
    idPagamento = models.IntegerField()
    dataViagem = models.DateTimeField()
    turist_id = models.ForeignKey(User, models.DO_NOTHING, db_column='User')
    horaInicio = models.DateTimeField()
    horaFim = models.DateTimeField()
    road_map = models.ForeignKey('RoadMap', models.DO_NOTHING)
    turist_id = models.ForeignKey(User, models.DO_NOTHING, db_column='User')


    class Meta:
        managed = False
        db_table = 'Travel'


class Comments(models.Model):
    idComment = models.AutoField(db_column='id', primary_key=True)  # Field name made lowercase.
    comment = models.CharField(max_length=300, blank=True, null=True)
    pontuation = models.IntegerField()
    User_idUser = models.ForeignKey('User_idUser', models.DO_NOTHING, db_column='User_idUser')
    road_map = models.ForeignKey(RoadMap, models.DO_NOTHING, db_column='id_road_map')

    class Meta:
        managed = False
        db_table = 'driver_coments'