# Generated by Django 4.2 on 2023-04-15 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_genre_alter_comics_author_remove_comics_genre_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comics',
            name='genre',
            field=models.ManyToManyField(related_name='comics', to='api.genre'),
        ),
    ]
