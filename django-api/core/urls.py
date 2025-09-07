from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('api.mentors.urls')),
    path('', include('api.applications.urls')),
    path("api/users/", include(("api.routers", "api"), namespace="api")),
    path("api/students/", include(("api.routers", "api"), namespace="api")),
    path("api/mentors", include(("api.routers", "api"), namespace="api")),
    path("api/education/", include(("api.routers", "api"), namespace="api")),
]

admin.site.site_header = "Prostudy Admin"
admin.site.site_title = "Prostudy Admin Portal"
admin.site.index_title = "Welcome to Prostudy Admin"