import React, { useRef, useState } from 'react'
import { ActivityIndicator, Animated, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import PokemonCard from '../components/PokemonCard'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'
import { useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import Splash from '../components/Splash'

const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const {isLoading,simplePokemonList,loadPokemons} = usePokemonPaginated()


  return (
    <>
      <Image 
        source={require('../assets/pokebola.png')}
        style={styles.porkebolaBG}
      />
      <View style={{
        alignItems:'center'
      }}>
        <FlatList
          data = {simplePokemonList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top:top +20, 
              marginBottom:top+20,
              paddingBottom:10
            }}>
              Pokedex
            </Text>
          )}
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
      
    </>
  )
}

export default HomeScreen