from django.urls import path
from . import views


urlpatterns = [
    path('users/', views.Utilizadores_operacoes.as_view()),
    path('login/',views.Utilizadores_operacoes.login),
    path('getUser/<str:token>',views.Utilizadores_operacoes.getUser),
    path('recoverUser/',views.Utilizadores_operacoes.recoverAccount),
    path('confirmRecoverUser/',views.Utilizadores_operacoes.confirmRecoverAccount),
    path('verifyAccount/',views.Utilizadores_operacoes.confirmAccount),
    path('resend_code/',views.Utilizadores_operacoes.resend_code),
    path('cancelAccount/',views.Utilizadores_operacoes.cancelAccount),
    path('users/<int:id>/', views.Utilizadores_operacoes.as_view()),
    path('translate/', views.TranslateAWS.translate),
    path('itineary/showItineary/<int:id>',views.Routes.getItineary),
    path('itineray/showRoadVehicles/<int:id>',views.Routes.getRoadVehicle),
    path('itineary/showRoadMap',views.Routes.getRoadMap),
    path('itineary/showInterestPoints',views.Routes.getPointsInterest),
    path('itineary/distance/',views.Routes.distance),
    path('socialLogin/google/',views.Utilizadores_operacoes.loginGoogle)
]