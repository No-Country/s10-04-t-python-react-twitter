from django.db import models
from ..tweets.models import Tweet, Comentario
from ..users.models import User

# Create your models here.

class Notificacion(models.Model):
    tipo = models.CharField(max_length=40)
    de_usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='noti_de')
    para_usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='noti_para')
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, null=True, blank=True)
    comentario = models.ForeignKey(Comentario, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']