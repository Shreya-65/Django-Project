from django.contrib import admin
from django.urls import path
from .import views
urlpatterns = [
   path('',views.index,name='home'),
   path('signin',views.signin,name="signin"),
path('ayurvedha',views.ayurveda,name="ayurvedha"),
path('babycare',views.baby_care,name="babycare"),
path('eyecare',views.eye_care,name="eyecare"),
path('haircare',views.haircare,name="haircare"),   
path('healthcare',views.health_care,name="health_care")
]
