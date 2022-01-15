from django.shortcuts import render, get_object_or_404, redirect, HttpResponse
from .models import Product
from .forms import DocumentForm, UploadProduct
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.core.exceptions import ValidationError
from django.db.models import Sum


# Create your views here.3k. 56k

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('main')
        else:
            messages.info(request, 'Username or password is incorrect')
    return render(request, 'login.html')

@login_required
def index(request):
    products = Product.objects.all().order_by('-productName')
    if request.method == 'POST':
        pname = request.POST['pname']
        bulkp = request.POST['bulkp']
        sellingp = request.POST['sellingp']
        totalp = request.POST['totalp']
        availablep = request.POST['availablep']
        ratio =  int(bulkp) // int(totalp)
        r_s = int(sellingp) - int(ratio)
        total_profit = int(r_s) * 30

        sold = int(totalp) - int(availablep)
        sold_selling = int(sold) * int(sellingp) #the amount we sold the product with the selling price
        sold_cost = int(sold) * int(ratio) #the amount according to the price we bougth the product
        current_profit = int(sold_selling) - int(sold_cost)

        if int(availablep) > int(totalp):
            return HttpResponse('<h1>Error!!! Available products can not be more than the total product</h1>')
            
        product = Product(productName=pname, bulkPrice=bulkp,
        unitSellingPrice=sellingp,totalProduct=totalp, 
        availableProduct=availablep, totalProfit=total_profit, current_profit=current_profit)
        product.save()
        return redirect('/')

    profit = Product.objects.aggregate(Sum('current_profit'))
    current_profitt = profit['current_profit__sum']
    context = {'products':products, 'current_profitt': current_profitt}
    return render(request, 'index.html', context)

def details(request, pk):
    product = get_object_or_404(Product, id=pk)
    if request.method == "POST":
        form = UploadProduct(request.POST, instance=product)
        try:
            if form.is_valid():
                product = form.save(commit=False)
                product.save()
                return redirect('/')
        except Exception as e:
            print('error', e)
    else:
        form = UploadProduct(instance=product)
    products = Product.objects.filter(id=pk)
    context = {'form': form, 'products': products}
    return render(request, 'details.html', context)

def profit_calculator(request):
    product = Product.objects.all()
    each_product_profit = sum(product.totalProfit)
    return redirect('/')


def detail1s(request, pk):
    products = Product.objects.filter(id=pk)
    context = {'products': products}
    return render(request, 'supply.html', context)