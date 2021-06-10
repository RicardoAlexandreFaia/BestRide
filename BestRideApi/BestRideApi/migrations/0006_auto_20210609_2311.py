# Generated by Django 3.2 on 2021-06-09 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BestRideApi', '0005_roles_userroles'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('idempresa_condutor', models.AutoField(db_column='idEmpresa_Condutor', primary_key=True, serialize=False)),
                ('nome_empresa', models.CharField(blank=True, max_length=45, null=True)),
                ('morada_empresa', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'Company',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CompanyDriver',
            fields=[
                ('idempresa_condutor', models.AutoField(db_column='idEmpresa_Condutor', primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'Company_Driver',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DriverComents',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('coment', models.CharField(blank=True, max_length=45, null=True)),
                ('pontuation', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'driver_coments',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DriverInfo',
            fields=[
                ('idinfo_extra_condutor', models.AutoField(db_column='idInfo_Extra_Condutor', primary_key=True, serialize=False)),
                ('nif', models.CharField(blank=True, max_length=45, null=True, unique=True)),
                ('carta_conducao', models.CharField(blank=True, max_length=45, null=True, unique=True)),
                ('validade_carta', models.DateField(blank=True, null=True)),
                ('telemovel', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'driver_info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ItinearyRoute',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'itineary_route',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='LogViagem',
            fields=[
                ('idlog_viagem', models.IntegerField(primary_key=True, serialize=False)),
                ('tempo', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'log_viagem',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('idpagamento', models.AutoField(db_column='idPagamento', primary_key=True, serialize=False)),
                ('modo_pagamento', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'Payment',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PointInterest',
            fields=[
                ('idpercurso', models.IntegerField(db_column='idPercurso', primary_key=True, serialize=False)),
                ('descricao', models.CharField(blank=True, max_length=45, null=True)),
                ('latitude_inicio', models.CharField(blank=True, max_length=45, null=True)),
                ('longitude_inicio', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'Point_Interest',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PointsTrip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'Points_Trip',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Recoveraccount',
            fields=[
                ('recupera_conta_id', models.AutoField(primary_key=True, serialize=False)),
                ('code', models.CharField(blank=True, max_length=6, null=True)),
                ('email', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'RecoverAccount',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='RoadMap',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lat', models.CharField(blank=True, max_length=45, null=True)),
                ('lng', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'road_map',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Travel',
            fields=[
                ('idviagem', models.AutoField(db_column='idViagem', primary_key=True, serialize=False)),
                ('dataviagem', models.DateField(blank=True, db_column='dataViagem', null=True)),
                ('horainicio', models.DateField(blank=True, db_column='horaInicio', null=True)),
                ('horafim', models.DateField(blank=True, db_column='horaFim', null=True)),
            ],
            options={
                'db_table': 'Travel',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Travelschedule',
            fields=[
                ('idagendaviagem', models.AutoField(db_column='idAgendaViagem', primary_key=True, serialize=False)),
                ('dataagenda', models.DateField(blank=True, db_column='dataAgenda', null=True)),
            ],
            options={
                'db_table': 'TravelSchedule',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tripevaluation',
            fields=[
                ('idcomentario', models.AutoField(db_column='idComentario', primary_key=True, serialize=False)),
                ('texto', models.CharField(blank=True, max_length=80, null=True)),
                ('roteiro_idroteiro', models.IntegerField()),
            ],
            options={
                'db_table': 'TripEvaluation',
                'managed': False,
            },
        ),
        migrations.AlterModelTable(
            name='user',
            table='User',
        ),
    ]
