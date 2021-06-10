# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Company(models.Model):
    idempresa_condutor = models.AutoField(db_column='idEmpresa_Condutor', primary_key=True)  # Field name made lowercase.
    nome_empresa = models.CharField(max_length=45, blank=True, null=True)
    morada_empresa = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Company'


class CompanyDriver(models.Model):
    idempresa_condutor = models.AutoField(db_column='idEmpresa_Condutor', primary_key=True)  # Field name made lowercase.
    empresa_idempresa_condutor = models.ForeignKey(Company, models.DO_NOTHING, db_column='Empresa_idEmpresa_Condutor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Company_Driver'
        unique_together = (('idempresa_condutor', 'empresa_idempresa_condutor'),)


class Payment(models.Model):
    idpagamento = models.AutoField(db_column='idPagamento', primary_key=True)  # Field name made lowercase.
    modo_pagamento = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Payment'


class PointInterest(models.Model):
    idpercurso = models.IntegerField(db_column='idPercurso', primary_key=True)  # Field name made lowercase.
    descricao = models.CharField(max_length=45, blank=True, null=True)
    latitude_inicio = models.CharField(max_length=45, blank=True, null=True)
    longitude_inicio = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Point_Interest'


class PointsTrip(models.Model):
    ponto_interesse_idpercurso = models.ForeignKey(PointInterest, models.DO_NOTHING, db_column='Ponto_Interesse_idPercurso')  # Field name made lowercase.
    viagem_idviagem = models.ForeignKey('Travel', models.DO_NOTHING, db_column='Viagem_idViagem')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Points_Trip'


class Recoveraccount(models.Model):
    recupera_conta_id = models.AutoField(primary_key=True)
    code = models.CharField(max_length=6, blank=True, null=True)
    email = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'RecoverAccount'


class Travel(models.Model):
    idviagem = models.AutoField(db_column='idViagem', primary_key=True)  # Field name made lowercase.
    pagamento_idpagamento = models.ForeignKey(Payment, models.DO_NOTHING, db_column='Pagamento_idPagamento')  # Field name made lowercase.
    dataviagem = models.DateField(db_column='dataViagem', blank=True, null=True)  # Field name made lowercase.
    turist = models.ForeignKey('User', models.DO_NOTHING)
    horainicio = models.DateField(db_column='horaInicio', blank=True, null=True)  # Field name made lowercase.
    horafim = models.DateField(db_column='horaFim', blank=True, null=True)  # Field name made lowercase.
    road_map = models.ForeignKey('RoadMap', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Travel'


class Travelschedule(models.Model):
    idagendaviagem = models.AutoField(db_column='idAgendaViagem', primary_key=True)  # Field name made lowercase.
    turist = models.ForeignKey('User', models.DO_NOTHING,related_name="turist_id")
    dataagenda = models.DateField(db_column='dataAgenda', blank=True, null=True)  # Field name made lowercase.
    driver = models.ForeignKey('User', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'TravelSchedule'


class Tripevaluation(models.Model):
    idcomentario = models.AutoField(db_column='idComentario', primary_key=True)  # Field name made lowercase.
    texto = models.CharField(max_length=80, blank=True, null=True)
    roteiro_idroteiro = models.IntegerField()
    road_map = models.ForeignKey('RoadMap', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'TripEvaluation'


class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    password = models.CharField(unique=True, max_length=255, blank=True, null=True)
    login_type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'User'


class DriverComents(models.Model):
    id = models.IntegerField(primary_key=True)
    coment = models.CharField(max_length=45, blank=True, null=True)
    pontuation = models.CharField(max_length=45, blank=True, null=True)
    user_iduser = models.ForeignKey(User, models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'driver_coments'


class DriverInfo(models.Model):
    idinfo_extra_condutor = models.AutoField(db_column='idInfo_Extra_Condutor', primary_key=True)  # Field name made lowercase.
    nif = models.CharField(unique=True, max_length=45, blank=True, null=True)
    carta_conducao = models.CharField(unique=True, max_length=45, blank=True, null=True)
    validade_carta = models.DateField(blank=True, null=True)
    telemovel = models.CharField(max_length=45, blank=True, null=True)
    user_iduser = models.ForeignKey(User, models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'driver_info'


class ItinearyRoute(models.Model):
    id = models.IntegerField(primary_key=True)
    ponto_interesse_idpercurso = models.ForeignKey(PointInterest, models.DO_NOTHING, db_column='Ponto_Interesse_idPercurso')  # Field name made lowercase.
    road_map = models.ForeignKey('RoadMap', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'itineary_route'
        unique_together = (('id', 'ponto_interesse_idpercurso', 'road_map'),)


class LogViagem(models.Model):
    idlog_viagem = models.IntegerField(primary_key=True)
    tempo = models.DateTimeField(blank=True, null=True)
    viagem_idviagem = models.ForeignKey(Travel, models.DO_NOTHING, db_column='Viagem_idViagem')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'log_viagem'


class RoadMap(models.Model):
    lat = models.CharField(max_length=45, blank=True, null=True)
    lng = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'road_map'


class Roles(models.Model):
    id_roles = models.IntegerField(primary_key=True)
    role = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'roles'


class TuristInfo(models.Model):
    email = models.CharField(max_length=45, blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    dob = models.CharField(max_length=45, blank=True, null=True)
    city = models.CharField(max_length=45, blank=True, null=True)
    gender = models.CharField(max_length=45, blank=True, null=True)
    phone_number = models.CharField(max_length=45, blank=True, null=True)
    adress = models.CharField(max_length=45, blank=True, null=True)
    postal_code = models.CharField(max_length=45, blank=True, null=True)
    user_iduser = models.ForeignKey(User, models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'turist_info'
        unique_together = (('id', 'user_iduser'),)


class UserRoles(models.Model):
    roles_id_roles = models.ForeignKey(Roles, models.DO_NOTHING, db_column='roles_id_roles')
    user_iduser = models.ForeignKey(User, models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'user_roles'
