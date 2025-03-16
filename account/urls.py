from django.urls import path

from . import views

app_name = 'account'

urlpatterns = [
    path('admin_dashboard/', views.AdminDashboard.as_view(), name='admin_dashboard'),

    # crud
    path('add_product/', views.AddProductView.as_view(), name='add_product'),
    path('edit_product/<pk>/', views.EditProductView.as_view(), name='edit_product'),
    path('delete_product/<pk>/', views.delete_product, name='delete_product'),

    # authentication
    path("logout/", views.logout_user, name="logout"),
]