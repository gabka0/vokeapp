from django.urls import path
from . import views
from . import viewsets

urlpatterns = [
    path("api/mentors-list/", views.MentorView.as_view(), name="mentors-list"),
    path("api/mentor/create", viewsets.CreateMentorViewSet.as_view({'post': 'create'}), name="create-mentor"),
    path("api/mentor/profile", viewsets.GetMentorProfileViewSet.as_view({'get': 'get'}), name="get-mentor-profile"),
]