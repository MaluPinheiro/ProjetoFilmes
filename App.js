import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Cartoes from './CartaoFilme';

export default function App() {

  let [filmes,setFilme] = useState([]);
  const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*'

  useEffect(function(){
    fetch(baseUrl) 
    .then(data => data.json())
    .then(objeto => setFilme(objeto.data)) 
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} style={styles.scroll}>
        {
          filmes.length > 0 ? 
          filmes.map(filme => <Cartoes key={filme.id} filme={filme.attributes}/>):
          <ActivityIndicator size={'large'}/>
        }
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    height: '100%'
  }
});
