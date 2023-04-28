import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Url = 'https://api.otaviolube.com'

export default function Cartoes({ filme }){

    const imgUrl = Url + filme.poster.data.attributes.url

    return(
        <View style={styles.viewCartao}>
            <Image style={styles.imgFilme} source={{uri: imgUrl}}/>
            <Text style={styles.Titulo}>Titulo: {filme.titulo}</Text>
            <Text style={styles.Sinopse}>Sinopse: {filme.sinopse}</Text>
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.txtBtnComprar}> Comprar </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    viewCartao: {
        backgroundColor: '#55B88A',
        width: '6%',
        height: '70%',
        padding: 8,
        margin: 6,
        borderWidth: 4,
        borderColor: '#0F4531',
        borderRadius: 10,
        alignItems: 'center'
    },
    imgFilme: {
        width: '50%',
        height: '50%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10
    },
    Titulo: {
        marginTop: 3,
        fontWeight: 'bold',
        fontSize: 20
    },
    Sinopse: {
        fontSize: 15,
        marginTop: 5,
    },
    txtBtnComprar: {
        backgroundColor: '#0F4531',
        borderRadius: 3,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 6,
        marginTop: 20,
        color: 'white',
        borderWidth: 1
    }
})
