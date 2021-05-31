from django.urls import path
from . import views


urlpatterns = [
    path('utilizadores/', views.Utilizadores_operacoes.as_view()),
    path('utilizadores/<int:id>/', views.Utilizadores_operacoes.as_view()),
    path('utilizadores/login/',views.Utilizadores_Info_operacoes.login),
    path('utilizadoresInfo/', views.Utilizadores_Info_operacoes.as_view()),
    path('utilizadoresInfo/<int:id>', views.Utilizadores_Info_operacoes.as_view()),
    path('recuperarConta/', views.Recuperar_Conta.as_view()),
    path('recuperarConta/recuperacao', views.Recuperar_Conta.email),
    path('recuperarConta/verificar', views.Recuperar_Conta.verificarCodigo)
]