# Django
from django.urls import path, re_path, include
# Views
from . import views


app_name ='users_app'

urlpatterns = [
   # Users
   path(
    'user/register/',
    views.UserRegistrationView.as_view(),
    name='register'
   ),
   path(
    "user/login/",
    views.UserLogin.as_view(),
    name="user-login"
   ),   
   path(
    "user/logout/",
    views.LogoutView.as_view(),
    name="user-logout"
   ),
   path(
    "user/detail/<pk>/",
    views.DetailAPIView.as_view(),
    name="user-detail"
   ),
]

   