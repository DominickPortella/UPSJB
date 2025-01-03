from django.contrib import admin
from django.urls import path
from Ejecutable import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.intranet_home, name='index'),
    path('login/', views.login_view, name='login'),
    path('perfil/', views.perfil_view, name='perfil'),
    path('principal/', views.principal_view, name='principal'),
    path('record_academico/', views.record_academico_view, name='record_academico'),
]