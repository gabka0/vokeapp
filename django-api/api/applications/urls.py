from django.urls import path
from . import views
from . import viewsets

urlpatterns = [
    path("api/applications-list/", views.ApplicationView.as_view({'get': 'list'}), name="applications-list"),
    path("api/application/create", viewsets.CreateApplicationViewSet.as_view({'post': 'create'}), name="create-application"),
    path("api/application/accept", viewsets.AcceptApplicationViewSet.as_view({'post': 'create'}), name="accept-application"),
    path("api/application-sender/contacts", viewsets.GetApplicationSenderContactsViewSet.as_view({'post': 'create'}), name="application-contacts"),
]