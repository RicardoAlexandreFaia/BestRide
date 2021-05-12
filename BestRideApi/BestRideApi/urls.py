from django.urls import path
from . import views

urlpatterns = [
    path('utilizadores/', views.Utilizadores_operacoes.as_view()),
    path('utilizadores/login/<str:password>/', views.Utilizadores_operacoes.as_view())
]
