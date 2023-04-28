import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Url = 'https://api.otaviolube.com/api/filmes'

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
        height: '65%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    imgFilme: {
        backgroundColor: 'green',
        width: '50%',
        height: '50%',
        borderRadius: 10
    },
    Titulo: {
        marginTop: 3,
        fontWeight: 'bold',
        fontSize: 16
    },
    Sinopse: {
        fontSize: 15,
        marginTop: 5,
    },
    txtBtnComprar: {
        backgroundColor: '#0F4531',
        borderRadius: 3,
        padding: 3,
        marginTop: 20,
        color: 'white'
    }
})
