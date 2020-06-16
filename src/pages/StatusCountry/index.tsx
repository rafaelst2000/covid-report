import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

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


const StatusCountry = ({ route }) => {
  const navigation = useNavigation()

  const {data} = route.params

  const [country, setCountry] = useState<COVIDCountry>(data)


  function handleNavigateBack(){
    navigation.goBack()
  }

  return(
  <>  
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon style={{marginHorizontal: 32}} name="chevron-left" size={30} color="#71bf44"/>
      </TouchableOpacity>

      <View style={styles.main}> 
        <Text style={styles.title}>
          {country.Country}
        </Text>

        <View style={styles.table}>
          <ListRow title="Novos Casos" desc={country.NewConfirmed} />
          <ListRow title="Total de Confirmados" desc={country.TotalConfirmed} />
          <ListRow title="Novas Mortes" desc={country.NewDeaths} />
          <ListRow title="Total de Mortes" desc={country.TotalDeaths} />
          <ListRow title="Novos Recuperados" desc={country.NewRecovered} />
          <ListRow title="Total de Recuperados" desc={country.TotalRecovered} />
        </View>

      </View>

      <View style={styles.footer}>
          <View style={styles.image}>
            <Image source={require('../../assets/cut.png')}
              style={{width: 250, height: 250}}/>
          </View>
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
    justifyContent: 'center',
    textAlign: 'center'

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
    maxWidth: 440,
    
  },

  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    borderBottomColor: "#71bf44",
    borderBottomWidth: 2
  },

  text: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 300,
    lineHeight: 32,
  },

  image: {
    marginBottom: 72,
    alignItems: 'flex-end',
  },

  footer: {
    marginBottom: 16
  },
})
export default StatusCountry