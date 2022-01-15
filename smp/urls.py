from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls'))
]

admin.site.site_header = "SMP"
admin.site.site_title = "SMP Admin"