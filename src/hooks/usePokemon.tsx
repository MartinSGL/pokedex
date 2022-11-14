import React, { useState } from 'react'
import { PokemonFull } from '../interfaces/porkemonInterfaces';
import { useEffect } from 'react';
import { pokemonApi } from '../api/pokemonApi';

const usePokemon = (id:string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

  useEffect(()=>{
    loadPokemon()
  },[])

  const loadPokemon = async () =>{
    const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setPokemon(resp.data)
    setIsLoading(false)
  }

  return {
    isLoading,pokemon
  }

}

export default usePokemon