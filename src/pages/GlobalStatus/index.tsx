import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import axios from 'axios'

import ListRow from '../../components/ListRow'

interface COVIDGlobal{
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}

const GlobalStatus = () => {
  const navigation = useNavigation()
  const [global, setGlobal] = useState<COVIDGlobal>({})

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then(res => {
      const data = res.data
      setGlobal(data.Global)
    })   
  }, []);

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
          Status Mundial
        </Text>

        <View style={styles.table}>
          <ListRow title="Novos Casos" desc={global.NewConfirmed} />
          <ListRow title="Total de Confirmados" desc={global.TotalConfirmed} />
          <ListRow title="Novas Mortes" desc={global.NewDeaths} />
          <ListRow title="Total de Mortes" desc={global.TotalDeaths} />
          <ListRow title="Novos Recuperados" desc={global.NewRecovered} />
          <ListRow title="Total de Recuperados" desc={global.TotalRecovered} />
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
export default GlobalStatus