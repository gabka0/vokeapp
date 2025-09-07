from rest_framework import serializers, exceptions
from api.user.models import User
from .models import Mentor
from rest_framework.decorators import api_view, permission_classes
from rest_framework import generics

class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = "__all__"
    
    def create(self, data):
        user = self.context["request"].user
        mentor = Mentor.objects.create(**data)
        mentor.user = user
        mentor.save()
        return mentor
    

class MentorList(generics.ListCreateAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer
