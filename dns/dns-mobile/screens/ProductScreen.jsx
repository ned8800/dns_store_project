import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { resetProduct, setProduct } from '../store/productSlice';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
export default function ProductScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { product } = useSelector((store) => store.product);
    useEffect(() => {
        async function getOneProduct() {
            await axiosInstance.get(`/items/${id}`).then((response) => dispatch(setProduct(response?.data)));
        }
        getOneProduct();
        return () => {
            dispatch(resetProduct());
        };
    }, [dispatch]);
    return (
        <View style={styles.card}>
            <Image resizeMode='contain' style={styles.image} source={{ uri: product.photo }} />
            <Text style={styles.text}>Название продукта: {product.name}</Text>
            <Text style={styles.text}>Описание продукта: {product.description}</Text>
            <Text style={styles.text}>Стоимость продукта: {product.price} р.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#fdfdfd',
        width: '100%',
        height: '100%',
        gap: 12,
        marginBottom: 8,
    },
    image: { flex: 1, alignSelf: 'stretch', width: win.width },
    text: { color: '#111', fontSize: 16 },
});
