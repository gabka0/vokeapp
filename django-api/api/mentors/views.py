from rest_framework import generics
from .serializers import MentorSerializer
from .models import Mentor
from django_filters.rest_framework import DjangoFilterBackend


class MentorView(generics.ListAPIView):
    queryset=Mentor.objects.all()
    serializer_class = MentorSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['consultation_cost', 'country', 'level_of_education', 'degree']
