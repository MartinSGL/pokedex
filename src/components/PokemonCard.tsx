import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/porkemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { RootStackParams } from '../navigator/Tab1';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props { 
    pokemon:SimplePokemon
}

const windowWidth = Dimensions.get('window').width

const PokemonCard = ({pokemon}:Props) => {

     const nav = useNavigation<StackNavigationProp<RootStackParams>>()

    const [bgColor, setBgColor] = useState('gray')
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted && getColor(pokemon.picture)

        return () =>{
            isMounted.current = false
        }
    }, [])

    const getColor = async (image:string) => {
        const result = await ImageColors.getColors(image, {
            fallback: '#228B22',
        })

        let color;

        switch (result.platform) {
            case 'android':
                color = result.dominant ?? 'gray'
                break
            case 'ios':
                color = result.background ?? 'gray'
                break
            default:
                throw new Error('Unexpected platform key')
          }

        setBgColor(color)
    }
    
    

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=> nav.navigate('PokemonScreen',{simplePokemon:pokemon,color:bgColor})}
        >
            <View style={{
                ...styles.cardContainer,
                backgroundColor:bgColor,
                width:windowWidth*0.4
            }}>
                <Text style={{...styles.name}}>
                    {pokemon.name + '\n#' + pokemon.id}
                </Text>
            
                <View style={styles.pokebolaContainer}>
                    <Image 
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage uri={pokemon.picture} style={styles.pokemonImage}/>
            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        top:20,
        left:10
    },
    pokebola:{
        width:100,
        height:100,
        position:'absolute',
        right:-20,
        bottom:-20
    },
    pokemonImage:{
        width:120,
        height:120,
        position:'absolute',
        right:-8,
        bottom:-5
    },
    pokebolaContainer:{
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:0,
        overflow:'hidden',
        opacity:0.5
    }
});