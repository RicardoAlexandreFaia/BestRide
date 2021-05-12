
from django.db import models


class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    nome = models.CharField(max_length=45)
    password = models.CharField(unique=True, max_length=255, blank=True, null=True)
    login_type = models.CharField(max_length=45, blank=True, null=True)
    userinfo_iduserinfo = models.ForeignKey('UserInfo', models.DO_NOTHING, db_column='UserInfo_idUserInfo')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'user'
        unique_together = (('iduser', 'userinfo_iduserinfo'),)


class UserInfo(models.Model):
    iduserinfo = models.IntegerField(db_column='idUserInfo', primary_key=True)  # Field name made lowercase.
    email = models.CharField(max_length=45, blank=True, null=True)
    primeiro_nome = models.CharField(max_length=45, blank=True, null=True)
    ultimo_nome = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_info'

