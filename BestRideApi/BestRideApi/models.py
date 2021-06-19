from django.db import models

class PointInterest(models.Model):
    idpercurso = models.AutoField(db_column='idPercurso', primary_key=True)  # Field name made lowercase.
    descricao = models.CharField(max_length=45, blank=True, null=True)
    latitude_inicio = models.CharField(max_length=45, blank=True, null=True)
    longitude_inicio = models.CharField(max_length=45, blank=True, null=True)

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


class RoadMap(models.Model):
    lat = models.CharField(max_length=45, blank=True, null=True)
    lng = models.CharField(max_length=45, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)
    price = models.CharField(max_length=100, blank=True, null=True)
    duration = models.CharField(max_length=100, blank=True, null=True)
    image = models.CharField(max_length=100, blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'road_map'