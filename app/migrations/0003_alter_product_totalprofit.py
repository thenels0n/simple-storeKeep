# Generated by Django 4.0.1 on 2022-01-14 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_product_productdescription'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='totalProfit',
            field=models.IntegerField(default=0),
        ),
    ]
