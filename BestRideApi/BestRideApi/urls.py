from django.urls import path
from . import views


urlpatterns = [
    path('users/', views.user_operations.as_view()),
    path('login/',views.user_operations.login),
    path('getUser/<str:token>',views.user_operations.getUser),
    path('recoverUser/',views.user_operations.recoverAccount),
    path('updateUser/<str:token>',views.user_operations.updateUser),
    path('changePassword/<str:token>',views.user_operations.changePassword),
    path('saveUser/',views.user_operations.saveUser),
    path('updateImage/<str:email>',views.user_operations.updateImageUser),
    path('confirmRecoverUser/',views.user_operations.confirmRecoverAccount),
    path('verifyAccount/',views.user_operations.confirmAccount),
    path('resend_code/',views.user_operations.resend_code),
    path('cancelAccount/',views.user_operations.cancelAccount),
    path('users/<int:id>/', views.user_operations.as_view()),
    path('socialLogin/google/', views.user_operations.loginGoogle),
    path('translate/', views.TranslateAWS.translate),
    path('itineary/showItineary/<int:id>',views.Routes.getItineary),
    path('itineray/showRoadVehicles/<int:id>',views.Routes.getRoadVehicle),
    path('itineary/showRoadMap',views.Routes.getRoadMap),
    path('itineary/showInterestPoints',views.Routes.getPointsInterest),
    path('itineary/distance/',views.Routes.distance),
    path('getComments/',views.Comments.getComments),
    path('postComments/',views.Comments.postComments)
]