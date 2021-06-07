# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Roles(models.Model):
    id_roles = models.IntegerField(primary_key=True)
    role = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'roles'


class TuristInfo(models.Model):
    email = models.CharField(max_length=45, blank=True, null=True, unique=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    dob = models.CharField(max_length=45, blank=True, null=True)
    city = models.CharField(max_length=45, blank=True, null=True)
    gender = models.CharField(max_length=45, blank=True, null=True)
    phone_number = models.CharField(max_length=45, blank=True, null=True)
    adress = models.CharField(max_length=45, blank=True, null=True)
    postal_code = models.CharField(max_length=45, blank=True, null=True)
    user_iduser = models.ForeignKey('User', models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'turist_info'
        unique_together = (('id', 'user_iduser'),)


class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    password = models.CharField(unique=True, max_length=255, blank=True, null=True)
    login_type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'


class UserRoles(models.Model):
    roles_id_roles = models.ForeignKey(Roles, models.DO_NOTHING, db_column='roles_id_roles')
    user_iduser = models.ForeignKey(User, models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'turist_info'

class RecoverAccount(models.Model):
    idrecuperarconta = models.AutoField(db_column='recupera_conta_id', primary_key=True)  # Field name made lowercase.
    code = models.CharField(max_length=10, db_column='code', null=False)
    email = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'recuperar_conta'
