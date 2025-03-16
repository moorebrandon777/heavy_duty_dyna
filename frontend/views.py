from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.contrib import messages

from store.models import Product, Media
from account.forms import UserLoginForm 

def home(request):
    if request.user.is_authenticated:
        return redirect('account:admin_dashboard')
    
    products = Product.objects.all()
    return render(request, 'frontend/index.html')

def about_us(request):
    if request.user.is_authenticated:
        return redirect('account:admin_dashboard')
    
    return render(request, 'frontend/about_us.html')

def contact_us(request):
    if request.user.is_authenticated:
        return redirect('account:admin_dashboard')
    
    return render(request, 'frontend/contact_us.html')

def equipments(request):
    products = Product.objects.all()

    context =  {'products':products}
    return render(request, 'frontend/equipments.html', context)

def equipment_detail(request, pk):
    product = Product.objects.get(pk=pk)
    product_images = Media.objects.filter(product=product)

    context =  {'product':product, 'product_images':product_images}
    return render(request, 'frontend/equipment_detail.html', context)


class LoginUserView(LoginView):
    redirect_authenticated_user = True
    template_name = 'frontend/login.html'
    form_class = UserLoginForm

    def get_success_url(self):
        if self.request.user.is_staff:
            return reverse_lazy('account:admin_dashboard')
        else:
            return reverse_lazy('account:customer_dashboard')
    
    def form_invalid(self, form):
        messages.error(self.request,'Invalid Email or password, please try again')
        return self.render_to_response(self.get_context_data(form=form))
