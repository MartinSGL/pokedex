import React, { useContext, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme'
import { SimplePokemon } from '../interfaces/porkemonInterfaces';
import { useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTheme } from '@react-navigation/native';

const widthWindow = Dimensions.get('window').width

const SearchScreen = () => {
    const {top} = useSafeAreaInsets()
    const {isFetching,simplePokemonList} =  usePokemonSearch()
    const [term, setTerm] =  useState('')
    const [pokemonFiltered, setPokemonFiltered] =  useState<SimplePokemon[]>([])
    // const { theme } = useContext(ThemeContext)
    const theme = useTheme()

    useEffect(()=>{

        if(term.length===0){
            return setPokemonFiltered([])
        }

        if(isNaN(Number(term))){
            setPokemonFiltered(
                simplePokemonList.filter(poke => 
                    poke.name.toLowerCase().includes(term.toLowerCase()))
            )
        }else{
            const pokemonById = simplePokemonList.find(poke => poke.id === term)
            setPokemonFiltered(pokemonById ? [pokemonById] : [] )
        }

        

    },[term])

    return isFetching ? <Loading />
    
    : (
        <View style={{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:theme.colors.background,
            justifyContent:'center'
        }}>

            <SearchInput
                onDebounce={setTerm}
                style={{
                    position:'absolute',
                    zIndex:999,
                    width:widthWindow - 40,
                    top:(Platform.OS==='ios') ? top : top +30,
                    left:20
                }}
            />

            <FlatList
                data = {pokemonFiltered}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <Text style={{
                    ...styles.title,
                    ...styles.globalMargin,
                    paddingBottom:10,
                    marginTop:(Platform.OS==='ios') ? top + 70 : top + 90,
                    color:theme.colors.text
                    }}>
                    {term}
                    </Text>
                )}
                numColumns={ 2 }
                keyExtractor = {(pokemon) => (pokemon.id)}
                renderItem = {({item})=> <PokemonCard pokemon={item}/>}
            />

        </View>
    )
}

export default SearchScreen