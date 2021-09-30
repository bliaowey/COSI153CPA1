import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            New Zealand National Anthem: "Aotearoa/God Defend New Zealand"
            </Text>
          </View>
          <View style={styles.horizontal}>
            <Image
              style={{width: 200, height: 100}}
              source={{uri: 'https://cdn.britannica.com/17/3017-004-DCC13F9D/Flag-New-Zealand.jpg'}}
            />
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
            <Text style={{fontSize: 20}}>
              Maori Lyrics: {"\n"}
                E Ihowā Atua {"\n"}
                O ngā iwi mātou rā {"\n"}
                Āta whakarangona {"\n"}
                Me aroha noa {"\n"}
                Kia hua ko te pai {"\n"}
                Kia tau tō atawhai {"\n"}
                Manaakitia mai {"\n"}
                Aotearoa
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Lyrics: {"\n"}
                  God of Nations at Thy feet {"\n"}
                  In the bonds of love we meet {"\n"}
                  Hear our voices, we entreat {"\n"}
                  God defend our free land {"\n"}
                  Guard Pacific's triple star {"\n"}
                  From the shafts of strife and war {"\n"}
                  Make her praises heard afar {"\n"}
                  God defend New Zealand
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
    flex: 2,
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
    horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'white',
  },
})
