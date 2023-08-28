# Django
from django.urls import path, re_path, include
# Views
from . import views


app_name ='likes_app'

urlpatterns=[
    path('like/<int:pk>/', views.like),
    path('lista_likes_tweet/<int:pk>/', views.list_like),
    path('lista_likes_usuario/<str:email>/', views.get_user_likes),
]

   