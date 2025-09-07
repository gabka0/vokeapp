from .serializers import MentorSerializer
from .models import Mentor
from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework import filters
from django.core.mail import send_mail
from django.conf import settings

class MentorView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = MentorSerializer
    queryset = Mentor.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['country', 'consultation_cost', 'university', 'degree']

class CreateMentorViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["post"]
    serializer_class = MentorSerializer

    def create(self, request, *args, **kwargs):
        mentor = Mentor.objects.create(
            user=request.user,
            first_name=request.data.get("first_name"),
            last_name=request.data.get("last_name"),
            country=request.data.get("country"),
            phone_number=request.data.get("phone_number"),
            level_of_education=request.data.get("level_of_education"),
            consultation_cost=request.data.get("consultation_cost"),
            university=request.data.get("university"),
            degree=request.data.get("degree"),
            graduation_year=request.data.get("graduation_year"),
            biography=request.data.get("biography"),
            photo_url=request.data.get("photo_url"),
            proof_of_degree_url=request.data.get("proof_of_degree_url"),
        )
        #Change user.role to "mentor_waiting_for_approval"
        user = request.user
        user.role = "mentor_waiting_for_approval"
        user.save()
        send_mail(
            subject="Зарегистрирован новый ментор",
            message="Зарегистрирован новый ментор: " + mentor.first_name + " " + mentor.last_name + " " + mentor.phone_number,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=["bakhyttass@gmail.com"],
        )
        return Response({"success": True}, status.HTTP_200_OK)
    
#Get mentor by id
class GetMentorProfileViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["get"]
    serializer_class = MentorSerializer
    queryset = Mentor.objects.all()

    def get(self, request, *args, **kwargs):
        user = request.user
        mentor = Mentor.objects.get(user=user)
        serializer = MentorSerializer(mentor)
        return Response(serializer.data, status.HTTP_200_OK)
