import { useEffect, useRef, useState } from "react"
import { pokemonApi } from "../api/pokemonApi"
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/porkemonInterfaces';


export const usePokemonPaginated = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
    
    const loadPokemons = async () =>{
        setIsLoading(true)
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current)
        nextPageUrl.current = resp.data.next
        mapPokemonList(resp.data.results)
        setIsLoading(false)
    }

    const mapPokemonList = (pokemonList:Result[]) =>{
        const newPokemonList:SimplePokemon[] = pokemonList.map(({name,url},index)=>{
            const urlParts = url.split('/')
            const id = urlParts[urlParts.length-2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return {id,name,picture}
        })

        setSimplePokemonList([...simplePokemonList,...newPokemonList])
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return {
        simplePokemonList,
        isLoading,
        loadPokemons
    }
}

