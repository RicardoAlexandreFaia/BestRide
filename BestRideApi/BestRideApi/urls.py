from django.urls import path
from . import views


urlpatterns = [
    path('utilizadores/', views.Utilizadores_operacoes.as_view()),
    path('utilizadores/<int:id>/', views.Utilizadores_operacoes.as_view()),
    path('utilizadores/login/<str:email>,<str:password>',views.Utilizadores_Info_operacoes.login),
    path('utilizadoresInfo/', views.Utilizadores_Info_operacoes.as_view()),
    path('utilizadoresInfo/<int:id>', views.Utilizadores_Info_operacoes.as_view())
]