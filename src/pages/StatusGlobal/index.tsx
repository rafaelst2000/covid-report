import React from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

import ListRow from '../../components/ListRow'

const StatusGlobal = ({ route }) => {
  const navigation = useNavigation()
  const {data} = route.params

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
          <ListRow title="Novos Casos" desc={data.NewConfirmed} />
          <ListRow title="Total de Confirmados" desc={data.TotalConfirmed} />
          <ListRow title="Novas Mortes" desc={data.NewDeaths} />
          <ListRow title="Total de Mortes" desc={data.TotalDeaths} />
          <ListRow title="Novos Recuperados" desc={data.NewRecovered} />
          <ListRow title="Total de Recuperados" desc={data.TotalRecovered} />
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
export default StatusGlobal