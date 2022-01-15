from multiprocessing.dummy import current_process
from django import forms
from .models import Product
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm


CHOICES = {
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
    ('6', '6'),
    ('7', '7'),
    ('8', '8'),
    ('9', '9'),
    ('10', '10'),
}


class DocumentForm(forms.ModelForm):
    productName = forms.CharField(label='Product Name')
    unitSellingPrice = forms.IntegerField(label='Product Selling Price')
    bulkPrice = forms.IntegerField(label='Bulk Price')
    totalProduct = forms.IntegerField(label='Total products')
    availableProduct = forms.IntegerField(label='Available products')
    current_process = forms.IntegerField(disabled=True)

    class Meta:
        model = Product
        fields = ['productName', 'bulkPrice', 'unitSellingPrice', 
        'totalProduct', 'availableProduct', 'current_profit']


class UploadProduct(forms.ModelForm):
    productName = forms.CharField(label='Product Name')
    unitSellingPrice = forms.IntegerField(label='Unit selling price')
    bulkPrice = forms.IntegerField(label='Bulk price')
    totalProduct = forms.IntegerField(label='Total products')
    availableProduct = forms.IntegerField(label='Available products')
    current_profit = forms.IntegerField()

    class Meta:
        model = Product
        fields = ['productName','bulkPrice', 'unitSellingPrice', 'totalProduct', 'availableProduct', 
        'current_profit',
        ]