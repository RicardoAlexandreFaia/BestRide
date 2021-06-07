from django.urls import path
from . import views


urlpatterns = [
    path('users/deleteAccount', views.Utilizadores_operacoes.deleteAccount),
    path('userInfo/deleteAccount', views.Utilizadores_Info_operacoes.deleteAccount),
    path('users/', views.Utilizadores_operacoes.as_view()),
    path('users/<int:id>/', views.Utilizadores_operacoes.as_view()),
    path('users/login/',views.Utilizadores_Info_operacoes.login),
    path('userInfo/', views.Utilizadores_Info_operacoes.as_view()),
    path('userInfo/<int:id>', views.Utilizadores_Info_operacoes.as_view()),
    path('userInfo/add_to_turist_role',views.UserRole.as_view()),
    path('recuperarConta/', views.Recover_Account.as_view()),
    path('recuperarConta/recuperacao', views.Recover_Account.sendEmail),
    path('recuperarConta/verificar', views.Recover_Account.codeVerification),
    path('translate/', views.TranslateAWS.translate)
]