from django.contrib import admin
from .models import Application
from django.utils.http import urlencode

admin.site.register(Application)

class ApplicationAdmin(admin.ModelAdmin):
    list_display = ("id", "sender", "reciever", "message", "state", "view_applications_link")

    def view_applications_link(self, obj):
        return format_html('<a href="/admin/applications/application/?sender__id__exact={}">View Applications</a>', obj.id)