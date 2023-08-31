from rest_framework import serializers, pagination
from .models import Tweet, Cita, Comentario

class TweetSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tweet
        fields = [
            'usuario',
            'contenido',
            'multimedia'
        ]
class CitaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Cita
        fields = ('__all__')

class ComentarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comentario
        fields = [
        'id', 
        'usuario', 
        'tweet_original', 
        'content', 
        'created_at'
    ]


# Serialziador de paginacion
class PersonPaginationSerializer(pagination.PageNumberPagination):
    page_size = 30
    max_page_size = 100
    