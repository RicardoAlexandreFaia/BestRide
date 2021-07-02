from django.urls import path
from . import views


urlpatterns = [
    path('users/', views.Utilizadores_operacoes.as_view()),
    path('login/',views.Utilizadores_operacoes.login),
    path('verifyAccount/',views.Utilizadores_operacoes.confirmAccount),
    path('users/<int:id>/', views.Utilizadores_operacoes.as_view()),
    path('translate/', views.TranslateAWS.translate),
    path('itineary/showItineary/<int:id>',views.Routes.getItineary),
    path('itineary/showRoadMap',views.Routes.getRoadMap),
    path('itineary/showInterestPoints',views.Routes.getPointsInterest)
]