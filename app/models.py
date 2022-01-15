from django.db import models

# Create your models here.
class Product(models.Model):
    productName = models.CharField(max_length=1000)
    bulkPrice = models.IntegerField()
    unitSellingPrice = models.IntegerField()
    totalProduct = models.IntegerField()
    availableProduct = models.IntegerField()
    productDescription = models.CharField(max_length=1000, blank=True)
    current_profit = models.IntegerField()
    totalProfit = models.IntegerField(default=0)

    def __str__(self):
        return self.productName
