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
    views.UserLogoutView.as_view(),
    name="user-logout"
   ),
   path(
    "user/detail/<pk>/",
    views.UserDetailAPIView.as_view(),
    name="user-detail"
   ),
   path(
    "user/update/<pk>/",
    views.UserUpdateAPIView.as_view(),
    name="user-update"
   ),
   path(
    "user/delete/<pk>/",
    views.PersonDeletePIView.as_view(),
    name="user-delete"
   ),
]

   