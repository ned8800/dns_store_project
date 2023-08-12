import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default function ProductCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Товар', { id: props.id_item });
    };
    console.log(props.photo);

    return (
        <View style={styles.card}>
            <Image resizeMode='contain' style={styles.image} source={{ uri: props.photo }} />
            <Text style={styles.text}>Название продукта: {props.name}</Text>
            <Text style={styles.text}>Описание продукта: {props.description}</Text>
            <Text style={styles.text}>Стоимость продукта: {props.price} р.</Text>
            <Button title='Подробнее' onPress={handlePress} />
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
        gap: 12,
        marginBottom: 8,
    },
    image: { flex: 1, alignSelf: 'stretch', width: win.width, height: win.height * 0.5 },
    text: { color: '#111', fontSize: 16 },
});
