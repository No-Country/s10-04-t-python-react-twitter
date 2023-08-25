from django.contrib import admin
from .models import Tweet, Comentario, Cita

# Register your models here.

admin.site.register(Tweet)
admin.site.register(Comentario)
admin.site.register(Cita)