from rest_framework import serializers
from rest_framework.fields import CharField
from bmstu_lab.models import Categories
from bmstu_lab.models import Items
from bmstu_lab.models import User
from bmstu_lab.models import Order

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'

class ItemsDepthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'
        depth = 2

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrdersDepthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        depth=2

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class LoginRequestSerializer(serializers.Serializer):
    model = User
    username = CharField(required=True)
    password = CharField(required=True)
