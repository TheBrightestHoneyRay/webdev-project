from rest_framework import serializers
from api.models import Type, Comics, User, MyComics, Genre


class ComicsSerializer(serializers.ModelSerializer):
    type_name = serializers.CharField(source='type.name')
    genre = serializers.StringRelatedField(many=True)

    class Meta:
        model = Comics
        fields = (
            'id',
            'name',
            'pic',
            'author',
            'genre',
            'description',
            'duration',
            'status',
            'rating',
            'type_name',
        )


class GenreSerializer(serializers.ModelSerializer):
    comics = ComicsSerializer(many=True)

    class Meta:
        model = Genre
        fields = ('id', 'name', 'comics')


class TypeSerializer(serializers.ModelSerializer):
    comics = ComicsSerializer(many=True)

    class Meta:
        model = Type
        fields = ('id', 'name', 'comics')


class MyComicsSerializer(serializers.HyperlinkedModelSerializer):
    comics = ComicsSerializer(required=True)

    class Meta:
        model = MyComics
        fields = (
            'comics',
            'progress'
        )


class UserSerializer(serializers.ModelSerializer):
    my_list = MyComicsSerializer(many=True)

    class Meta:
        model = User
        fields = (
            'id',
            'user_name',
            'email',
            'password',
            'my_list'
        )