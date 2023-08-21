# Python
from model_utils.models import TimeStampedModel
# Django
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# Managers
from .managers import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    
    email = models.EmailField(
        'Email', 
        max_length=254, 
        unique=True,
    )
    firs_name = models.CharField(
        'First Name', 
        max_length=50,
    )
    last_name = models.CharField(
        'Full Name', 
        max_length=50,
        blank=True,
        null=True,
    )
    avatar = models.ImageField(
        'Avatar',
        upload_to= 'user',
        blank=True,
        null=True,
    )
    front_page = models.ImageField(
        'Front Page',
        upload_to= 'user',
        blank=True,
        null=True,
    )
    birthdate = models.DateField(
        blank=True,
        null=True,
    )
    bio = models.TextField(
        'Biography', 
        max_length=160,
        blank=True,
        null=True,
    )
    location = models.CharField(
        'Location', 
        max_length=50,
        blank=True,
        null=True,
    )
    website = models.URLField(
        'WebSite', 
        max_length=200,
        blank=True,
        null=True
    )
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    
    # Le indicamos en base a que va a crear el usuario
    USERNAME_FIELD ='email'
    
    # Le indicamos cuales van a ser los requisitos
    REQUIRED_FIELDS =['firs_name',]
    
    objects = UserManager()
    
    def __str__(self):
        return str(self.id) + ' ' +self.email


class Following(TimeStampedModel):
    
    follower = models.ForeignKey(
        User, 
        related_name='Following', 
        on_delete=models.CASCADE,
    )
    following = models.ForeignKey(
        User, 
        related_name='Followers', 
        on_delete=models.CASCADE,
    )
    
    def __str__(self):
        return self.follower + self.following