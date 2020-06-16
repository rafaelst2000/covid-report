import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import axios from 'axios'

import ListRow from '../../components/ListRow'

interface COVIDCountry{
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
}

const AllCountries = ({ route }) => {
  const navigation = useNavigation()
  const {data} = route.params

  const [country, setCountry] = useState<COVIDCountry>({})

  function handleNavigateBack(){
    navigation.goBack()
  }

  function handleSelectedCountry(event: string){

    const selected = data.filter(country =>
        country.Country.toLowerCase().includes(event.toLowerCase()),
    );

    setCountry(selected[0])
    console.log(country) //error here
    navigation.navigate('StatusCountry', {data: country})
  }

  return(
  <>  
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon style={{marginHorizontal: 32}} name="chevron-left" size={30} color="#71bf44"/>
      </TouchableOpacity>

      <View style={styles.itemsContainer}>
        <ScrollView 
        contentContainerStyle={{paddingHorizontal: 20}}>
        
          {data.map(country => (
          <TouchableOpacity
           key={country.Country} 
           onPress={() => handleSelectedCountry(country.Country)}> 
            <View style={styles.out}>
              <View style={styles.line}>
              
                <Text style={styles.text}>{country.Country}</Text>
              
              </View>
            </View>
           </TouchableOpacity>  
          ))}
        
      </ScrollView>
       </View>
       

    </View>
        
  </>  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140d21',
    paddingTop: 20 + Constants.statusBarHeight,
  },

  main: {
    flex: 1,
    marginTop: 24,
    justifyContent: 'center',
    textAlign: 'left'

  },

  title: {
    color: '#fff',
    padding: 24,
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 32,
    textAlign: "center",
  },
  table: {
    padding: 32
  },
  out: {
    flexDirection: 'row',
  },

  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 12,
    borderBottomColor: "#71bf44",
    borderBottomWidth: 2
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  text: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 300,
    lineHeight: 32,
  },
})
export default AllCountries