import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView, SafeAreaView,Footer } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Slovenia from './Slovenia';
import USA from './USA';
import Canada from './Canada';
import NewZealand from './NewZealand';
import Bosnia from './Bosnia';

function HomeNav({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch', boarderColor: 'white' }}>
      <Button
        title="United States"
        onPress={() => navigation.navigate('United States')}
      />
      <Button
        title="Slovenia"
        onPress={() => navigation.navigate('Slovenia')}
      />
      <Button
        title="Canada"
        onPress={() => navigation.navigate('Canada')}
      />
      <Button
        title="New Zealand"
        onPress={() => navigation.navigate('New Zealand')}
      />
      <Button
        title="Bosnia and Herzegovina"
        onPress={() => navigation.navigate('Bosnia')}
      />
    </View>
    </ScrollView>
  );
}

function SloveniaScreen({ navigation }) {
  return (
    <Slovenia/>
  );
}

function USAScreen({ navigation }) {
  return (
    <USA/>
  );
}

function CanadaScreen({ navigation }) {
  return (
    <Canada/>
  );
}

function NewZealandScreen({ navigation }) {
  return (
    <NewZealand/>
  );
}

function BosniaScreen({ navigation }) {
  return (
    <Bosnia/>
  );
}

const Tab = createNativeStackNavigator();

export default function App(){
  const [country, setCountry] = useState(0);
  return(
          <View style={styles.container}>
            <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
              <Text style={styles.header}>
              National Anthem Database
              </Text>
            </View>
            <View style={styles.container}>
                <Text style={{fontSize: 20, margin: 0,}}>
                Click on a country to see its national anthem:
                </Text>
            </View>
            <View style={{flex: 10, flexDirection: 'colomn'}}>
            <NavigationContainer style={{flex: 1, flexDirection: 'colomn'}}>
                  <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeNav} />
                    <Tab.Screen name="Slovenia" component={SloveniaScreen} />
                    <Tab.Screen name="United States" component={USAScreen} />
                    <Tab.Screen name="Canada" component={CanadaScreen} />
                    <Tab.Screen name="New Zealand" component={NewZealandScreen} />
                    <Tab.Screen name="Bosnia" component={BosniaScreen} />
                  </Tab.Navigator>
                </NavigationContainer>
            </View>
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
              <TextInput
                  style={styles.textinput}
                  placeholder="Search for a Country"
                  onChangeText={text => {setCountry(text)}}
                />
                <Button
                color='red' title='Search'
                />  
            </View>
          </View>
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
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'stretch',
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
  textinput:{
      flex:0.5,
      margin:20,
      fontSize:20
    },
})
