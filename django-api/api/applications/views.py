from rest_framework import viewsets
from .serializers import ApplicationSerializer
from .models import Application
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ApplicationView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    serializer_class = ApplicationSerializer
    #queryset only for current user
    def get_queryset(self):
        user = self.request.user
        if user.role == "mentor_approved":
            return Application.objects.filter(reciever=self.request.user)
        else:
            return Application.objects.filter(sender=self.request.user)