import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Url = 'https://api.otaviolube.com'

export default function Cartoes({ filme }){

    const imgUrl = Url + filme.poster.data.attributes.url

    return(
        <View style={styles.viewCartao}>
            <Text style={styles.Titulo}>{filme.titulo}</Text>
            <Image style={styles.imgFilme} source={{uri: imgUrl}}/>
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
        width: '5.5%',
        height: '90%',
        padding: 8,
        marginLeft: 15,
        marginTop: 15,
        borderWidth: 4,
        borderColor: '#0F4531',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgFilme: {
        width: '60%',
        height: '50%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10
    },
    Titulo: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 30
    },
    Sinopse: {
        fontSize: 18,
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
