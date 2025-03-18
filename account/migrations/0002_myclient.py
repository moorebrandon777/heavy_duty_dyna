# Generated by Django 4.2 on 2025-03-18 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyClient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('c_email', models.EmailField(max_length=254)),
                ('c_full_name', models.CharField(max_length=255)),
                ('c_country', models.CharField(blank=True, max_length=100, null=True)),
                ('c_city', models.CharField(blank=True, max_length=100, null=True)),
                ('c_address', models.CharField(blank=True, max_length=200, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'My Client',
                'verbose_name_plural': 'My Clients',
                'ordering': ('-created',),
            },
        ),
    ]
