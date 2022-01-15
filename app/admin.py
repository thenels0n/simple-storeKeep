from django.contrib import admin
from .models import Product
from import_export.admin import ImportExportModelAdmin

# Register your models here.


@admin.register(Product)
class SantaPeriodAdmin(ImportExportModelAdmin):
    list_display = ('productName', 'current_profit', 'availableProduct', 'totalProduct', 'totalProfit')