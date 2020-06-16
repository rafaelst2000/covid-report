import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

import ListRow from '../../components/ListRow'

import COVIDCountry from '../../model/CovidCountry'



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

})
export default StatusCountry