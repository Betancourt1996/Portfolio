from rest_framework import serializers
from .models import Generos,Usuarios

class GenerosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Generos
        fields = "__all__"

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = "__all__"
