from django.urls import path

from . import views

app_name = 'basket'
urlpatterns = [
    path('basket_add/', views.basket_add, name='basket_add'),
]