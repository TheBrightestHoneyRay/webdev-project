from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse, HttpResponseRedirect
from django.template import loader
from api.models import Comics, User, Type, MyComics, Genre
from api.serializers import ComicsSerializer, TypeSerializer, GenreSerializer, MyComicsSerializer, UserSerializer


def comics_all(request):
    comics = Comics.objects.all().order_by('id')

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def comics_detail(request, comics_id):
    comics = Comics.objects.all()

    try:
        comics_det = comics.get(id=comics_id)
    except Comics.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics_serializer = ComicsSerializer(comics_det)
    return JsonResponse(comics_serializer.data)


def types_all(request):
    types = Type.objects.all().order_by('id')

    types_serializer = TypeSerializer(types, many=True)
    return JsonResponse(types_serializer.data, safe=False)


def type_detail(request, type_id):
    types = Type.objects.all()

    try:
        type_det = types.get(id=type_id)
    except Type.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    type_serializer = TypeSerializer(type_det)
    return JsonResponse(type_serializer.data, safe=False)


def genre_all(request):
    genres = Genre.objects.all()

    genres_serializer = GenreSerializer(genres, many=True)
    return JsonResponse(genres_serializer.data, safe=False)


def testing(request):
    mycomics = Comics.objects.all().values()
    template = loader.get_template('try.html')
    context = {
        'mycomics': mycomics
    }
    return HttpResponse(template.render(context, request))


def user_list_all(request, user_id):
    try:
       i_user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    my_comics = MyComics.objects.all()
    my_comics_list = []
    for com in my_comics:
        if com.user_id == user_id:
            my_comics_list.append(com)
    my_comics_list_serializer = MyComicsSerializer(my_comics_list, many=True)
    return JsonResponse(my_comics_list_serializer.data, safe=False)


def my_comics_detail(request, user_id, comics_id):

    try:
        i_user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    my_comics = MyComics.objects.all()
    my_comics_list = []
    for com in my_comics:
        if com.user_id == user_id:
            my_comics_list.append(com)
    try:
        for c in my_comics_list:
            comics = c.__class__.objects.get(comics_id=comics_id)
    except MyComics.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics_serializer = MyComicsSerializer(comics)
    return JsonResponse(comics_serializer.data, safe=False)


def top_ten(request):
    comics = Comics.objects.all().order_by('rating')[:10]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def type_ten(request, type_id):
    try:
        tyep = Type.objects.get(id=type_id)
    except Type.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics = tyep.comics.order_by('-rating')[:10]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def top_three(request):
    comics = Comics.objects.all().order_by('-rating')[:10]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)


def type_three(request, type_id):
    try:
        tyep = Type.objects.get(id=type_id)
    except Type.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    comics = tyep.comics.order_by('-rating')[:3]

    comics_serializer = ComicsSerializer(comics, many=True)
    return JsonResponse(comics_serializer.data, safe=False)