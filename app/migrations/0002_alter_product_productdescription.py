# Generated by Django 3.2.8 on 2022-01-13 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='productDescription',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]