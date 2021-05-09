# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Agendaviagem(models.Model):
    idagendaviagem = models.AutoField(db_column='idAgendaViagem', primary_key=True)  # Field name made lowercase.
    condutor_idcondutor = models.ForeignKey('Condutor', models.DO_NOTHING, db_column='Condutor_idCondutor')  # Field name made lowercase.
    user_iduser = models.ForeignKey('User', models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.
    dataagenda = models.DateField(db_column='dataAgenda', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'agendaviagem'
        unique_together = (('idagendaviagem', 'condutor_idcondutor'),)


class AvaliacaoRoteiro(models.Model):
    idcomentario = models.AutoField(db_column='idComentario', primary_key=True)  # Field name made lowercase.
    texto = models.CharField(max_length=80, blank=True, null=True)
    roteiro_idroteiro = models.ForeignKey('Roteiro', models.DO_NOTHING, db_column='roteiro_idroteiro')

    class Meta:
        managed = False
        db_table = 'avaliacao_roteiro'


class Avaliacoescondutor(models.Model):
    idavaliacoescondutor = models.IntegerField(db_column='idavaliacoesCondutor', primary_key=True)  # Field name made lowercase.
    comentario = models.CharField(max_length=45, blank=True, null=True)
    avaliado = models.CharField(max_length=45, blank=True, null=True)
    condutor_idcondutor = models.ForeignKey('Condutor', models.DO_NOTHING, db_column='Condutor_idCondutor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'avaliacoescondutor'
        unique_together = (('idavaliacoescondutor', 'condutor_idcondutor'),)


class Condutor(models.Model):
    idcondutor = models.AutoField(db_column='idCondutor', primary_key=True)  # Field name made lowercase.
    nome = models.CharField(max_length=45, blank=True, null=True)
    rnat_license = models.IntegerField(blank=True, null=True)
    email = models.CharField(max_length=45, blank=True, null=True)
    password = models.CharField(unique=True, max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'condutor'


class Empresa(models.Model):
    idempresa_condutor = models.AutoField(db_column='idEmpresa_Condutor', primary_key=True)  # Field name made lowercase.
    nome_empresa = models.CharField(max_length=45, blank=True, null=True)
    morada_empresa = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'empresa'


class EmpresaCondutor(models.Model):
    idempresa_condutor = models.AutoField(db_column='idEmpresa_Condutor', primary_key=True)  # Field name made lowercase.
    empresa_idempresa_condutor = models.ForeignKey(Empresa, models.DO_NOTHING, db_column='Empresa_idEmpresa_Condutor')  # Field name made lowercase.
    condutor_idcondutor = models.ForeignKey(Condutor, models.DO_NOTHING, db_column='Condutor_idCondutor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'empresa_condutor'
        unique_together = (('idempresa_condutor', 'empresa_idempresa_condutor', 'condutor_idcondutor'),)


class InfoExtraCondutor(models.Model):
    idinfo_extra_condutor = models.AutoField(db_column='idInfo_Extra_Condutor', primary_key=True)  # Field name made lowercase.
    nif = models.CharField(unique=True, max_length=45, blank=True, null=True)
    carta_conducao = models.CharField(unique=True, max_length=45, blank=True, null=True)
    validade_carta = models.DateField(blank=True, null=True)
    telemovel = models.CharField(max_length=45, blank=True, null=True)
    condutor_idcondutor = models.ForeignKey(Condutor, models.DO_NOTHING, db_column='Condutor_idCondutor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'info_extra_condutor'
        unique_together = (('idinfo_extra_condutor', 'condutor_idcondutor'),)


class Pagamento(models.Model):
    idpagamento = models.AutoField(db_column='idPagamento', primary_key=True)  # Field name made lowercase.
    modo_pagamento = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pagamento'


class Percurso(models.Model):
    idpercurso = models.IntegerField(db_column='idPercurso', primary_key=True)  # Field name made lowercase.
    descricao = models.CharField(max_length=45, blank=True, null=True)
    latitude_inicio = models.CharField(max_length=45, blank=True, null=True)
    longitude_inicio = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'percurso'

'''
class PercursoRoteiro(models.Model):
    roteiro_idroteiro = models.OneToOneField('Roteiro', models.DO_NOTHING, db_column='roteiro_idroteiro', primary_key=True)
    roteiro_viagem_idviagem = models.ForeignKey('Roteiro', models.DO_NOTHING, db_column='roteiro_Viagem_idViagem')  # Field name made lowercase.
    percurso_idpercurso = models.ForeignKey(Percurso, models.DO_NOTHING, db_column='Percurso_idPercurso')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'percurso_roteiro'
'''



class Roteiro(models.Model):
    idroteiro = models.IntegerField(primary_key=True)
    latitude = models.CharField(max_length=45, blank=True, null=True)
    longitude = models.CharField(max_length=45, blank=True, null=True)
    viagem_idviagem = models.ForeignKey('Viagem', models.DO_NOTHING, db_column='Viagem_idViagem')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'roteiro'
        unique_together = (('idroteiro', 'viagem_idviagem'),)


class User(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    nome = models.CharField(max_length=45)
    password = models.CharField(unique=True, max_length=15, blank=True, null=True)
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


class Viagem(models.Model):
    idviagem = models.AutoField(db_column='idViagem', primary_key=True)  # Field name made lowercase.
    condutor_idcondutor = models.ForeignKey(Condutor, models.DO_NOTHING, db_column='Condutor_idCondutor')  # Field name made lowercase.
    pagamento_idpagamento = models.ForeignKey(Pagamento, models.DO_NOTHING, db_column='Pagamento_idPagamento')  # Field name made lowercase.
    percurso_idpercurso = models.ForeignKey(Percurso, models.DO_NOTHING, db_column='Percurso_idPercurso')  # Field name made lowercase.
    dataviagem = models.DateField(db_column='dataViagem', blank=True, null=True)  # Field name made lowercase.
    user_iduser = models.ForeignKey(User, models.DO_NOTHING, db_column='User_idUser')  # Field name made lowercase.
    horainicio = models.DateField(db_column='horaInicio', blank=True, null=True)  # Field name made lowercase.
    horafim = models.DateField(db_column='horaFim', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'viagem'
        unique_together = (('idviagem', 'condutor_idcondutor', 'user_iduser', 'pagamento_idpagamento', 'percurso_idpercurso'),)
