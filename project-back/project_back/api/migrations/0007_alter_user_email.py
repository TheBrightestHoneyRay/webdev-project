# Generated by Django 4.2 on 2023-04-15 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_comics_published_alter_comics_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=255),
        ),
    ]
