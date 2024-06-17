from django.db import models

class Usuarios(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30)
    apellidos = models.CharField(max_length=40)
    edad = models.IntegerField()
    telefono = models.CharField(max_length=9)
    direccion = models.CharField(max_length=40)

    def __str__(self):
        return self.nombre
