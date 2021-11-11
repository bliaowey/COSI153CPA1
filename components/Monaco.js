import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Monaco National Anthem: "Hymne Monégasque"
            </Text>
          </View>
          <View style={styles.horizontal}>
            <Image
              style={{width: 200, height: 100}}
              source={{uri: 'https://www.worldatlas.com/r/w768/img/flag/mc-flag.jpg'}}
            />
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
                Despoei tugiù, sciü d'u nostru paise {"\n"}
                Se ride aù ventu, u meme pavayun {"\n"}
                Despoei tugiù a curù russa e gianca {"\n"}
                E stà l'emblèma d'a nostra libertà {"\n"}
                Grandi e piciui, l'an sempre respetà {"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Forever, in our land, {"\n"}
              One flag has flown in the wind {"\n"}
              Forever, the colours red and white {"\n"}
              Have symbolised our liberty {"\n"}
              Adults and children have always respected them. {"\n"}

            </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    fontSize:32,
    padding: 20,
    margin: 10,
    color:"white",
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'stretch',
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
    horizontal: {
    flex:2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
})
