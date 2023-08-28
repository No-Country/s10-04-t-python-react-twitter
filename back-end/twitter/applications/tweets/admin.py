# Django
from django.contrib import admin
# Models
from . import models

admin.site.register(models.Tweet)
admin.site.register(models.Cita)
admin.site.register(models.Comentario)
