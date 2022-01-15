from django import views
from django.contrib import admin
from django.urls import URLPattern, path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('details/<int:pk>/', details, name='details'),
]
