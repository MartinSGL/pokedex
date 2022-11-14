import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { RootStackParams } from '../navigator/Tab1'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails'
import { SimplePokemon } from '../interfaces/porkemonInterfaces';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

const PokemonScreen = ({route,navigation}:Props) => {

    
    const {top} = useSafeAreaInsets()
    const {simplePokemon:{id,name,picture},color} = route.params
    const {isLoading,pokemon} = usePokemon(id)

    return (
        <View style={{flex:1}}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor:color,
            }}>
                {/* botton para regresar */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top:top+5
                    }}
                    onPress={()=>navigation.pop()}
                >
                    <Icon 
                        name={'arrow-back-outline'} 
                        color={'white'} 
                        size={35}
                        
                    />
                </TouchableOpacity>
                    {/* nombre */}
                <Text style={{
                    ...styles.pokemonName,
                    top:top+45
                }}>
                    {name + '\n#'}  {id}
                </Text>
                {/* porkebola blanca */}
                <Image
                   source={require('../assets/pokebola-blanca.png')}
                   style={{...styles.pokeball}} 
                />

                <FadeInImage 
                    uri={picture}
                    style={{...styles.pokemonImage}}
                />

            </View>
            
            {/* detalles */}
            {isLoading 
                ?
                <View style={styles.activityIndicator}>
                    <ActivityIndicator color={color} size={50} />
                </View>
                :
                <PokemonDetails pokemon={pokemon}/>
            }

        </View>
    )
}

export default PokemonScreen

const styles = StyleSheet.create({
    headerContainer:{
        height:370,
        zIndex:999,
        alignItems:'center',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000
    },
    backButton:{
        position:'absolute',
        left:20
    },
    pokemonName:{
        color:'white',
        fontSize:40,
        alignSelf:'flex-start',
        left:20
    },
    pokeball:{
        width:250,
        height:250,
        bottom:-20,
        opacity:0.7
    },
    pokemonImage:{
        width:250,
        height:250,
        position:'absolute',
        bottom:-15
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})