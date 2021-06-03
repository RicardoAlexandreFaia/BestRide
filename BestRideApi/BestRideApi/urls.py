from django.urls import path
from . import views


urlpatterns = [
    path('users/', views.Utilizadores_operacoes.as_view()),
    path('users/<int:id>/', views.Utilizadores_operacoes.as_view()),
    path('users/login/',views.Utilizadores_Info_operacoes.login),
    path('userInfo/', views.Utilizadores_Info_operacoes.as_view()),
    path('userInfo/<int:id>', views.Utilizadores_Info_operacoes.as_view()),
    path('userInfo/add_to_turist_role',views.UserRole.as_view()),
    path('translate/',views.TranslateAWS.translate)
]