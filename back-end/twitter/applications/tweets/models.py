from django.db import models
from ..users.models import User
from django.core.validators import FileExtensionValidator

# Create your models here.

class Tweet(models.Model):
    #Aca lo conectamos con el user
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    #Creamos los campos que queremos que tenga el tweet(la base de datos)
    contenido=models.CharField(max_length=280, blank=True, null=True)
    
    multimedia = models.CharField(blank=True, max_length=300, null=True)
    
    #imagen = models.ImageField(upload_to='tweets/', null=True, blank=True)
    #video = models.FileField(upload_to='tweets/', null=True, blank=True)
    created=models.DateTimeField(auto_now_add=True)

    #funcionaldiad retweet
    retweet_of = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)


    #reacciones = models.ForeignKey(davidtarea, on_delete=models.CASCADE)
    liked = models.ManyToManyField(User, default=None, blank=True, related_name='liked')

    class Meta:
        verbose_name='Tweet'
        verbose_name_plural='Tweets'


class Cita(models.Model):
    
    tweet_original = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    contenido = models.CharField(max_length=280)
    multimedia = models.CharField(blank=True, max_length=300, null=True)
    created = models.DateTimeField(auto_now_add=True)


class Comentario(models.Model):
    
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet_original = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    multimedia = models.CharField(blank=True, max_length=300, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)