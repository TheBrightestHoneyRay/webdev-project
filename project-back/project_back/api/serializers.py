
from rest_framework import serializers
from api.models import Type, Comics, User, MyComics, Genre, Comments, Discussion


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
            'published',
            'type_name',
            'comments'
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


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comments
        fields = (
            'id',
            'user',
            'body',
            'post_time'
        )


class DiscussionSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Discussion
        fields = (
            'id',
            'title',
            'creator',
            'created_time',
            'comments'
        )
