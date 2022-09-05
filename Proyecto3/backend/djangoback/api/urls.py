
from django.urls import path, include

#from api import viewsplan
from . import views

from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
app_name = "api"

urlpatterns = [
    #path('admin/', admin.site.urls),


    path('', views.index, name = "index"),
    path('generos/', views.GeneroList.as_view(), name = "generos"),
    path('generos/<int:pk>/', views.GeneroDetail.as_view(), name = "generosdetails"),
    path('usuarios/', views.UsuarioList.as_view(), name = "usuarios"),
    path('usuarios/<int:pk>/', views.UsuarioDetail.as_view(), name = "usuariosdetails"),
    path('peliculas/', views.peliculas, name = "peliculas"),
    path('peliculas/<int:pk>/', views.peliculasDetails, name = "peliculasdetails"),
    path('peliculas/valoracion/<int:pk>', views.peliculasOrden, name = "peliculasOrden"),
]
urlpatterns = format_suffix_patterns(urlpatterns)