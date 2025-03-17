from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render, redirect
from django.views.decorators.csrf import csrf_exempt

from .basket import Basket
from store.models import Product


def basket_summary(request):
    basket = Basket(request)
    return render(request, 'basket/summary.html', {'basket': basket})

@csrf_exempt
def basket_add(request):
    basket = Basket(request)

    if request.method == "POST":
        if request.POST.get("action") == "post":
            try:
                product_id = int(request.POST.get("productid"))
                qty = int(request.POST.get("qty"))
                print(qty, product_id)  # Debugging logs

                product = get_object_or_404(Product, id=product_id)
                basket.add(product=product, qty=qty)

                basketqty = basket.__len__()

                return JsonResponse({"qty": basketqty, "message": "Item added successfully"})
            except (ValueError, TypeError) as e:
                return JsonResponse({"error": f"Invalid data: {str(e)}"}, status=400)

    return JsonResponse({"error": "Invalid request"}, status=400)
