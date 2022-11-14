import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Switch, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../components/PokemonCard'
import { ThemeContext } from '../contexts/ThemeContext'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const {isLoading,simplePokemonList,loadPokemons} = usePokemonPaginated()
  const {theme,setDarkTheme,setLightTheme} = useContext(ThemeContext)

  return (
    <View style={{backgroundColor:theme.colors.background}}>
      <Image 
        source={theme.dark ? require('../assets/pokebola-blanca.png'):require('../assets/pokebola.png')}
        style={styles.porkebolaBG}
      />
      <View style={{
        alignItems:'center'
      }}>
        <FlatList
          data = {simplePokemonList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={(
            <View style={{
              flexDirection:'row',
              ...styles.globalMargin,
              top:top +20, 
              marginBottom:top+20,
              paddingBottom:10,
              alignItems:'center',
              justifyContent:'space-between'
            }}>
              <Text style={{
                  ...styles.title,
                  color:theme.colors.text
                }}>
              Pokedex
              </Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:theme.colors.text}}>Light/Dark</Text>
                <Switch style={{marginLeft:10}} 
                  value={theme.dark} 
                  onChange={()=>{
                    if(theme.dark===false){
                      setDarkTheme()
                    }else{
                      setLightTheme()
                    }
                  }}
                />
              </View>
              
            </View>
               
          )}
          stickyHeaderIndices={[0]}
          numColumns={ 2 }
          keyExtractor = {(pokemon) => (pokemon.id)}
          renderItem = {({item})=> <PokemonCard pokemon={item}/>}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}

          
          ListFooterComponent = {<ActivityIndicator 
            style={{height:100}}
            size={20}
            color="grey"
          />}
        />
      </View>
      
    </View>
  )
}

export default HomeScreen