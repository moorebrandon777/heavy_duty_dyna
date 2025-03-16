from django.urls import path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.home, name='home'),
    path('about-us/', views.about_us, name='about_us'),
    path('contact-us/', views.contact_us, name='contact_us'),
    path('equipments/', views.equipments, name='equipments'),
    path('equipment-detail/<pk>/', views.equipment_detail, name='equipment_detail'),

    path('login/', views.LoginUserView.as_view(), name='login'),
]