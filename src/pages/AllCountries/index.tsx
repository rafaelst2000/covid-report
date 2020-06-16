import React from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

const AllCountries = ({ route }) => {
  const navigation = useNavigation()
  const {data} = route.params

  function handleNavigateBack(){
    navigation.goBack()
  }

  function handleSelectedCountry(event: string){
    const selected = data.filter(c =>
        c.Country.toLowerCase().includes(event.toLowerCase()),
    );
    navigation.navigate('StatusCountry', {data: selected[0]})
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

  title: {
    color: '#fff',
    padding: 24,
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 32,
    textAlign: "center",
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
    paddingBottom: 16,
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