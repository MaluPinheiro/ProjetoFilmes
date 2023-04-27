import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*'

export default function Cartoes({ filme }){

    const imgUrl = baseUrl + filme.attributes.poster.data.attributes.url

    return(
        <View style={styles.viewCartao}>
            <Image style={styles.imgFilme} source={{uri: imgUrl}}/>
            <Text style={styles.Titulo}>Titulo: {filme.attributes.titulo}</Text>
            <Text style={styles.Sinopse}>Sinopse: {filme.attributes.sinopse}</Text>
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.txtBtnComprar}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    viewCartao: {
        color: 'yellow'
    }
})
