# Generated by Django 4.2 on 2023-04-15 10:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_comics_type_alter_mycomicslist_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comics',
            name='type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comics', to='api.type'),
        ),
    ]
