#
from collections import Counter
#
from rest_framework.decorators import api_view
#
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets,generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
#
from .serializer import CitaSerializer,TweetSerializerId,RetweetSerializer,TweetSerializerGET,TweetSerializerPOST,ComentarioSerializerGET,ComentarioSerializerPOST
#
from .models import Tweet, Cita, Comentario
#
from applications.users.models import User
#
from collections import Counter
from rest_framework import status

# Create your views here.

class TweetViewSet(generics.ListCreateAPIView):
    
    # permission_classes = [IsAuthenticated]
    # serializer_class = TweetSerializer
    # parser_classes = [MultiPartParser, FormParser]
    # pagination_class = PersonPaginationSerializer
    queryset = Tweet.objects.all()  
    
    def get_serializer_class(self):

        if self.request.method == 'GET':
            return TweetSerializerGET

        elif self.request.method == 'POST':
            return TweetSerializerPOST


class CitaViewSet(generics.ListCreateAPIView):
    
    # pagination_class = PersonPaginationSerializer
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer


class ComentarioCreateView(generics.ListCreateAPIView):
    
    # pagination_class = PersonPaginationSerializer
    queryset = Comentario.objects.all()
    # permission_classes = [IsAuthenticated]  # Requiere autenticación para acceder
    
    def get_serializer_class(self):

        if self.request.method == 'GET':
            return ComentarioSerializerGET

        elif self.request.method == 'POST':
            return ComentarioSerializerPOST


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
    

# Detail Tweets
class TweetsDetailAPIView(generics.RetrieveAPIView):

    serializer_class = TweetSerializerId
    queryset = Tweet.objects.all()


class RetweetView(APIView):
    
    def post(self, request):
        
        serializer = RetweetSerializer(data=request.data)
        
        if serializer.is_valid():
            tweet_id = serializer.validated_data['tweet_id']
            tweet_to_retweet = Tweet.objects.get(id=tweet_id)

            # Crear un retweet
            retweet = Tweet.objects.create(
                usuario=request.user,
                contenido=tweet_to_retweet.contenido,
                retweet_of=tweet_to_retweet
            )
            retweet.save()

            return Response({'message': 'Retweet creado exitosamente.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)