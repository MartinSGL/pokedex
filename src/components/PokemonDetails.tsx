import React, { useContext } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../contexts/ThemeContext'
import { PokemonFull } from '../interfaces/porkemonInterfaces'
import { FadeInImage } from './FadeInImage'

interface Props {
    pokemon: PokemonFull
}

const PokemonDetails = ({pokemon}:Props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <ScrollView 
            style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor:theme.colors.background
            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{
                ...styles.container,
                marginTop:400
            }}>
                {/* types */}
                <Text style={{...styles.title,color:theme.colors.text}}>Types</Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemon.types.map(({type})=>{
                            return (
                                <Text 
                                    key={type.name}
                                    style={{...styles.regularText,color:theme.colors.text}}
                                >
                                    {type.name}
                                </Text>
                            )
                        })
                    }
                </View>

                {/* Peso */}
                <Text style={{...styles.title,color:theme.colors.text}}>Peso</Text>
                <Text style={{...styles.regularText,color:theme.colors.text}}> {pokemon.weight} kg </Text>
            </View>

            {/* sprites */}
            <View 
                style={{
                ...styles.container,
            }}>
                <Text style={{...styles.title,color:theme.colors.text}}>
                    Sprites
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage 
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprites}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprites}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprites}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprites}
                    />
                </ScrollView>

            </View>

            <View style={styles.container}>
                {/* habilidades */}
                <Text style={{...styles.title,color:theme.colors.text}}>Habilitades base</Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemon.abilities.map(({ability})=>{
                            return (
                                <Text 
                                    key={ability.name}
                                    style={{...styles.regularText,color:theme.colors.text}}
                                >
                                    {ability.name}
                                </Text>
                            )
                        })
                    }
                </View>
            </View>

            <View style={styles.container}>
                {/* movimientos */}
                <Text style={{...styles.title,color:theme.colors.text}}>Movimientos</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {
                        pokemon.moves.map(({move})=>{
                            return (
                                <Text 
                                    key={move.name}
                                    style={{...styles.regularText,color:theme.colors.text}}
                                >
                                    {move.name}
                                </Text>
                            )
                        })
                    }
                </View>
            </View>

            <View style={styles.container}>
                {/* stats */}
                <Text style={{...styles.title,color:theme.colors.text}}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((s,i) =>{
                            return (
                                <View style={{flexDirection:'row'}} key={s.stat.name+ i}>
                                    <Text 
                                        style={{
                                            ...styles.regularText,
                                            color:theme.colors.text,
                                            marginRight:10,
                                            width:150
                                        }}
                                    >
                                        {s.stat.name}
                                    </Text>
                                    <Text 
                                        style={{
                                            ...styles.regularText,
                                            color:theme.colors.text,
                                            fontWeight:'bold'
                                        }}
                                    >
                                        {s.base_stat}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
                    {/* sprite final */}
                <View
                    style={{
                        marginBottom:20,
                        alignItems:'center'
                    }}
                >
                    <FadeInImage 
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprites}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20
    },
    regularText:{
        fontSize:19,
        marginRight:10
    },
    basicSprites:{
        width:100,
        height:100
    }
});