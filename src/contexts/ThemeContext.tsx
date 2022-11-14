import React,{ createContext, useEffect, useReducer } from "react"
import { useColorScheme } from "react-native"
import { themeReducer, ThemeState } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState
    setDarkTheme: () => void
    setLightTheme: () => void
}

export const lightTheme: ThemeState = {
    currentTheme:'light',
    dark:false,
    dividerColor:'rgba(0,0,0,0.6)',
    colors:{
        primary: '#084f6a',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme:'dark',
    dark:true,
    dividerColor:'rgba(255,255,255,0.6)',
    colors:{
        primary: '#76cecb',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'orange',
        notification: 'teal'
    }
}


export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}:any) =>{

    const colorScheme = useColorScheme()

    const [theme, dispatch] = useReducer( themeReducer, colorScheme === 'dark' ? darkTheme :lightTheme )
    // const [theme, dispatch] = useReducer( themeReducer, Appearance.colorScheme === 'dark' ? darkTheme :lightTheme )

    useEffect(() => {
        //old way according to the course
        // AppState.addEventListener('change',(status)=>{
        //     if(status === 'active'){

        //         Appearance.getColorScheme() === 'light'
        //         ? setLightTheme()
        //         : setDarkTheme()
        //     }
        // })

      colorScheme === 'light'
      ? setLightTheme()
      : setDarkTheme()
    }, [colorScheme])
    

    const setDarkTheme = () => {
        dispatch({type:'set_dark_theme',payload:darkTheme})
    }

    const setLightTheme = () => {
        dispatch({type:'set_light_theme',payload:lightTheme})
    }

    return (
        <ThemeContext.Provider value={{theme,setDarkTheme,setLightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}