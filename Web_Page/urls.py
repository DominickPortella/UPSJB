from django.contrib import admin
from django.urls import path
from Ejecutable import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.intranet_home, name='intranet_home'),
    path('login/', views.login_view, name='login'),
     path('contrasena/', views.contrasena_view, name='contrasena'),  # Nueva ruta para la página de contraseña
     path('perfil/', views.perfil_view, name='perfil'),
]