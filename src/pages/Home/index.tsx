import React from 'react'
import { View,Text, ImageBackground ,StyleSheet, 
Image, TextInput, Picker, KeyboardAvoidingView, Platform, Group  } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()

  function handleNavigateToGlobal(){
    navigation.navigate('GlobalStatus')
  }


  return(
   <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding': undefined}>
    <View style={styles.container}>
      <View style={styles.main}> 
       
       <View>
           <Text style={styles.title}>
            <Image source={require('../../assets/bg.png')}
              style={{width: 40, height: 40}}/>
            &nbsp;
            Covid Report</Text>

           <Text style={styles.description}>Monitorando a Covid-19 de forma rápida e prática :)</Text>
         </View>
      </View>

      
      
      <View style={styles.footer}>
          <View style={styles.image}>
              <Image source={require('../../assets/cut.png')}
                  style={{width: 250, height: 250}}/>
          </View>
      
       <RectButton style={styles.button} onPress={handleNavigateToGlobal}>
           <Text style={styles.buttonText}>Status Mundial</Text>
         </RectButton>

          <RectButton style={styles.button} onPress={() => {}}>
           <Text style={styles.buttonText}>Status por País</Text>
          </RectButton>
   


     </View>

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140d21',
    
  },

  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 64
  },

  image: {
    marginBottom: 72,
    alignItems: 'flex-end',
  },

  title: {
    color: '#fff',
    padding: 24,
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 32,
    textAlign: "center",
  },

  description: {
    color: 'lightgrey',
    fontSize: 24,
    marginLeft: 16,
    marginTop: 48,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 300,
    lineHeight: 32,
  },
  
  footer: {
    marginBottom: 16
  },

  select: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    paddingVertical: 5
    },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#71bf44',
    height: 60,
    marginRight: 'auto',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
  }
});
export default Home