import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,SafeAreaView,ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            American National Anthem: "The Star Spangled Banner"
            </Text>
          </View>
          <View style={styles.horizontal}>
            <Image
              style={{width: 200, height: 100}}
              source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'}}
            />
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, padding: 10}}>
              Lyrics: {"\n"}
                Say, can you see {"\n"}
                By the dawn's early light {"\n"}
                What so proudly we hailed {"\n"}
                At the twilight's last gleaming? {"\n"} {"\n"}
                Whose broad stripes and bright stars {"\n"}
                Through the perilous fight {"\n"}
                O'er the ramparts we watched, {"\n"}
                Were so gallantly, yeah, streaming? {"\n"} {"\n"}
                And the rockets' red glare {"\n"}
                The bombs bursting in air {"\n"}
                Gave proof through the night {"\n"}
                That our flag was still there {"\n"} {"\n"}
                O say, does that star-spangled banner yet wave {"\n"}
                O'er the land of the free and the home of the brave
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
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'white',
  },
})
