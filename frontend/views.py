from django.shortcuts import render

from store.models import Product, Media

def home(request):
    return render(request, 'frontend/index.html')

def about_us(request):
    return render(request, 'frontend/about_us.html')

def contact_us(request):
    return render(request, 'frontend/contact_us.html')

def equipments(request):
    products = Product.objects.all()

    context =  {'products':products}
    return render(request, 'frontend/equipments.html', context)
