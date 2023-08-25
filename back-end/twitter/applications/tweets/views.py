
from rest_framework import viewsets,generics
from rest_framework.permissions import IsAuthenticated
from .serializer import TweetSerializer, CitaSerializer, ComentarioSerializer
from .models import Tweet, Cita, Comentario
from rest_framework.views import APIView
from rest_framework.response import Response
from collections import Counter

# Create your views here.

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class CitaViewSet(viewsets.ModelViewSet):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer


class ComentarioCreateView(generics.ListCreateAPIView):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer
    permission_classes = [IsAuthenticated]  # Requiere autenticación para acceder

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class TrendingTopicsView(APIView):
    def get(self, request):
        # Recopila todos los textos de tweets y comentarios
        all_texts = []
        all_texts += [tweet.contenido for tweet in Tweet.objects.all()]
        all_texts += [comentario.content for comentario in Comentario.objects.all()]

        # Divide los textos en palabras
        palabras = ' '.join(all_texts).split()

        # Cuenta la frecuencia de cada palabra
        contador_palabras = Counter(palabras)

        # Ordena las palabras por frecuencia
        orden_palabras = sorted(contador_palabras.items(), key=lambda x: x[1], reverse=True)

        # Selecciona las tendencias principales (por ejemplo, las 10 más frecuentes)
        trending_topics = [word for word, count in orden_palabras[:10]]

        return Response({'trending_topics': trending_topics})