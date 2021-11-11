import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView, Video } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Romanian National Anthem: "Deșteaptă-te, Române!"
            </Text>
          </View>
          <View style={styles.horizontal}>
            <Image
              style={{width: 200, height: 100}}
              source={{uri: 'https://youtu.be/cqvanJigxhU'}}
            />
            
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
                Deșteaptă-te, române, din somnul cel de moarte,{"\n"}
                În care te-adânciră barbarii de tirani!{"\n"}
                Acum ori niciodată, croiește-ți altă soarte,{"\n"}
                La care să se-nchine și cruzii tăi dușmani.{"\n"}

                Acum ori niciodată să dăm dovezi la lume{"\n"}
                Că-n aste mâni mai curge un sânge de roman,{"\n"}
                Și că-n a noastre piepturi păstrăm cu fală-un nume{"\n"}
                Triumfător în lupte, un nume de Traian!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Awaken thee Romanian from your sleep of death{"\n"}
              Into which you've been sunk by the barbaric tyrants.{"\n"}
              Now or never, sow a new fate for yourself{"\n"}
              To which even your cruel enemies will bow!{"\n"}

              Now or never, let us show the world{"\n"}
              That through these arms, Roman blood still flows;{"\n"}
              And that in our chests we still proudly bear a name{"\n"}
              Triumphant in battles, the name of Trajan!{"\n"}
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
