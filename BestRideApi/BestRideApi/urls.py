from django.urls import path
from . import views

urlpatterns = [
    path('utilizadores/', views.Utilizadores_operacoes.as_view()),
    path('utilizadores/<int:chave>/', views.Utilizadores_operacoes.as_view())
]
