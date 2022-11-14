import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/porkemonInterfaces'
import { FadeInImage } from './FadeInImage'

interface Props {
    pokemon: PokemonFull
}

const PokemonDetails = ({pokemon}:Props) => {
  return (
    <ScrollView 
        style={{
            ...StyleSheet.absoluteFillObject
        }}
        showsVerticalScrollIndicator={false}
    >
        <View style={{
            ...styles.container,
            marginTop:400
        }}>
            {/* types */}
            <Text style={styles.title}>Types</Text>
            <View style={{flexDirection:'row'}}>
                {
                    pokemon.types.map(({type})=>{
                        return (
                            <Text 
                                key={type.name}
                                style={styles.regularText}
                            >
                                {type.name}
                            </Text>
                        )
                    })
                }
             </View>

             {/* Peso */}
            <Text style={styles.title}>Peso</Text>
            <Text style={styles.regularText}> {pokemon.weight} kg </Text>
        </View>

        {/* sprites */}
        <View 
            style={{
            ...styles.container,
        }}>
            <Text style={styles.title}>
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
            <Text style={styles.title}>Habilitades base</Text>
            <View style={{flexDirection:'row'}}>
                {
                    pokemon.abilities.map(({ability})=>{
                        return (
                            <Text 
                                key={ability.name}
                                style={styles.regularText}
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
            <Text style={styles.title}>Movimientos</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {
                    pokemon.moves.map(({move})=>{
                        return (
                            <Text 
                                key={move.name}
                                style={styles.regularText}
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
            <Text style={styles.title}>Stats</Text>
            <View>
                {
                    pokemon.stats.map((s,i) =>{
                        return (
                            <View style={{flexDirection:'row'}} key={s.stat.name+ i}>
                                <Text 
                                    style={{
                                        ...styles.regularText,
                                        marginRight:10,
                                        width:150
                                    }}
                                >
                                    {s.stat.name}
                                </Text>
                                <Text 
                                    style={{
                                        ...styles.regularText,
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