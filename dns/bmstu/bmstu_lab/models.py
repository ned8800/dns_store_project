from django.db import models
from django.contrib.auth.models import User

class Categories(models.Model):
    id_category = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'Categories'

class Items(models.Model):
    id_item = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=150, blank=True, null=True)
    category = models.ForeignKey(Categories, on_delete=models.DO_NOTHING)
    photo = models.ImageField(default=None)

    class Meta:
        managed = True
        db_table = 'Items'

class Order(models.Model):
    item = models.ForeignKey(Items, on_delete=models.DO_NOTHING)
    customer = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    status = models.TextField()
    order_date = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'orders'
