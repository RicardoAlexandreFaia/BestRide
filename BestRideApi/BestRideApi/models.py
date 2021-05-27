# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    password = models.CharField(unique=True, max_length=255, blank=True, null=True)
    login_type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'


class UserInfo(models.Model):
    iduserinfo = models.AutoField(db_column='idUserInfo', primary_key=True)  # Field name made lowercase.
    email = models.CharField(max_length=45, blank=True, null=True)
    primeiro_nome = models.CharField(max_length=45, blank=True, null=True)
    ultimo_nome = models.CharField(max_length=45, blank=True, null=True)
    userid = models.ForeignKey(User, models.DO_NOTHING, db_column='UserID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'turist_info'

class RecuperarConta(models.Model):
    idrecuperarconta = models.AutoField(db_column='recupera_conta_id', primary_key=True)  # Field name made lowercase.
    code = models.CharField(max_length=10, db_column='code', null=False)
    email = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'recuperar_conta'


