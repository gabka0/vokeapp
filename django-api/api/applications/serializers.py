from rest_framework import serializers, generics
from .models import Application
from api.user.models import User
from api.mentors.models import Mentor

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = "__all__"
    
    def create(self, data):
        sender = self.context["request"].user
        role = self.context["request"].user.role
        if role == "mentor_approved":
            raise serializers.ValidationError("Mentors cannot apply to be mentored")
        reciever = self.context["request"].data.get("reciever")
        application = Application.objects.create(**data)
        application.sender = sender
        application.reciever = reciever
        application.save()
        return application

class ApplicationList(generics.ListCreateAPIView):
    serializer_class = ApplicationSerializer
    queryset = Application.objects.all()
    
    def get_queryset(self):
        mentor = Mentor.objects.get(user=self.request.user)
        return Application.objects.filter(mentor=mentor)