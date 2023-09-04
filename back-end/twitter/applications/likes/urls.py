# Django
from django.urls import path, re_path, include
# Views
from . import views


app_name ='likes_app'

urlpatterns=[
    #Likes
    path('like/<int:pk>/', views.like),
    path('lista_likes_tweet/<int:pk>/', views.list_like),
    path('lista_likes_usuario/<str:email>/', views.get_user_likes),
    #Notificaciones
    path('notis_read/', views.noti),
    path('notis_no_read/', views.noti_no_read),
    path('noti_leer/<int:pk>/', views.noti_read_one),
    path('notis_leer_todo', views.noti_read_all),
]

   