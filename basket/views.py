from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.utils.http import urlencode

from .basket import Basket
from store.models import Product
from order.models import Order, OrderItem
from account.forms import ClientForm


def basket_summary(request):
    basket = Basket(request)
    form = ClientForm()
    return render(request, 'basket/summary.html', {'basket': basket, 'form':form})

def basket_add(request):
    basket = Basket(request)

    if request.method == "POST":
        if request.POST.get("action") == "post":
            try:
                product_id = int(request.POST.get("productid"))
                qty = int(request.POST.get("qty"))

                product = get_object_or_404(Product, id=product_id)
                basket.add(product=product, qty=qty)

                basketqty = basket.__len__()

                return JsonResponse({"qty": basketqty, "message": "Item added successfully"})
            except (ValueError, TypeError) as e:
                return JsonResponse({"error": f"Invalid data: {str(e)}"}, status=400)

    return JsonResponse({"error": "Invalid request"}, status=400)


def basket_delete(request):
    basket = Basket(request)
    if request.POST.get('action') == 'post':
        try:
            product_id = int(request.POST.get('productid'))
            basket.delete(product=product_id)

            basketqty = basket.__len__()
            baskettotal = basket.get_total_price()
            shippingtotal = basket.get_shipping_price()
            
            response = JsonResponse({'qty': basketqty, 'subtotal': baskettotal, 'shipping':shippingtotal})
            return response
        except (ValueError, TypeError) as e:
                return JsonResponse({"error": f"Invalid data: {str(e)}"}, status=400)
    return JsonResponse({"error": "Invalid request"}, status=400)


def checkout_order(request):
    basket = Basket(request)
    form = ClientForm(request.POST)
    if form.is_valid():
        customer = form.save()
        baskettotal = basket.get_total_price()
        # basketsubtotal = basket.get_subtotal_price()
        basketshipping = basket.get_shipping_price()

        if not request.user.is_authenticated:

            order = Order.objects.create(
                full_name=customer.c_full_name,
                email=customer.c_email,
                country=customer.c_country,
                city=customer.c_city,
                address=customer.c_address,
                total=baskettotal,
                shipping_price=basketshipping,
                delivery_date=customer.c_delivery_date,
                delivery_address=customer.c_delivery_address
                )
            order_id = order.pk

            for item in basket:
                OrderItem.objects.create(
                    order_id=order_id,
                    product=item['product'],
                    price=item['price'],
                    quantity=item['qty']
                    )
        

            # clear cart
            basket.clear()

            # redirect to order successfull
            redirect_url = reverse('basket:order_successful')
            parameters = urlencode({'obj': order.pk})
            return redirect(f'{redirect_url}?{parameters}')
        

def order_successful(request):
    order_id = request.GET.get('obj')
    order = Order.objects.get(pk=order_id)
    order_items = OrderItem.objects.filter(order=order)

    # print(order)
    
    context = {'order_items':order_items, 'order':order}
    return render(request, 'basket/order_successful.html', context)
