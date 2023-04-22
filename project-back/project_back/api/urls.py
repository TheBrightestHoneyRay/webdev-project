from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('comics/', views.comics_all),
    path('comics/<int:comics_id>/', views.comics_detail),
    path('types/', views.types_all),
    path('types/<int:type_id>/', views.type_detail),
    path('genre/', views.genre_all),
    path('<int:user_id>/mylist/', views.user_list_all),
    path('<int:user_id>/mylist/<int:comics_id>/', views.my_comics_detail),
    path('top_ten/', views.top_ten),
    path('top_ten/<int:type_id>/', views.type_ten),
    path('top_three/', views.top_three),
    path('top_three/<int:type_id>/', views.type_three),
    path('template/', views.testing),
    path('ongoing/top_three', views.top_three_ongoing),
]
