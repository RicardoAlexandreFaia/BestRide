
from django.db import models


class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    nome = models.CharField(max_length=45)
    password = models.TextField(unique=True, max_length=255, blank=True, null=True)
    login_type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'

