from django.db import models
from applications.users.models import User
from django.core.validators import FileExtensionValidator

# Create your models here.

class Tweet(models.Model):
    #Aca lo conectamos con el user
    usuario = models.ForeignKey(User, related_name= 'tweets', on_delete=models.CASCADE)

    #Creamos los campos que queremos que tenga el tweet(la base de datos)
    contenido=models.CharField(max_length=280, blank=True, null=True)
    
    multimedia = models.FileField(upload_to='tweets/', null=True, blank=True )
    
    gif = models.CharField(max_length=150, null=True, blank=True)
    #imagen = models.ImageField(upload_to='tweets/', null=True, blank=True)
    #video = models.FileField(upload_to='tweets/', null=True, blank=True)
    created=models.DateTimeField(auto_now_add=True)

    #funcionaldiad retweet
    retweet_of = models.ForeignKey('self',related_name= 'retweet', null=True, blank=True, on_delete=models.CASCADE)


    #reacciones = models.ForeignKey(davidtarea, on_delete=models.CASCADE)
    liked = models.ManyToManyField(User, default=None, blank=True, related_name='liked')

    class Meta:
        verbose_name='Tweet'
        verbose_name_plural='Tweets'

    def __str__ (self):
        return f"  {self.id}  Tweet by {self.usuario.firs_name}: {self.contenido}"

class Cita(models.Model):
    
    tweet_original = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    contenido = models.CharField(max_length=280)
    multimedia = models.CharField(blank=True, max_length=300, null=True)
    gif = models.CharField(max_length=150, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)


class Comentario(models.Model):
    
    usuario = models.ForeignKey(User,related_name='user', on_delete=models.CASCADE)
    tweet_original = models.ForeignKey(Tweet, related_name='comentario', on_delete=models.CASCADE) 
    content = models.TextField(null=True, blank=True )
    created_at = models.DateTimeField(auto_now_add=True)
    multimedia = models.FileField(upload_to='tweets/', null=True, blank=True )
    gif = models.CharField(max_length=150, null=True, blank=True)
