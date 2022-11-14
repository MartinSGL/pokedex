import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

type SplashProps = 'flex' | 'none'

const Splash = () => {

    const {opacity,fadeIn,fadeOut} = useAnimation()
    const {opacity:op2,fadeOut:fo2} = useAnimation(1)
    const [splash,setSplash] = useState<SplashProps>('flex')

    useEffect(() => {
      fadeIn()
      setTimeout(()=>{
        fadeOut()
        fo2()
      },1500)
      setTimeout(()=>{
        setSplash('none')
      },2500)
    }, [])
    
    return (
        <Animated.View style={{
            flex:1,
            backgroundColor:'#1631DF',
            justifyContent:'center',
            alignItems:'center',
            zIndex:9999,
            ...StyleSheet.absoluteFillObject,
            opacity:op2,
            display:splash

        }}>
            <Animated.Image source={require('../assets/pokebola-blanca.png')} 
            style={{
                width:300,
                height:300,
                opacity:opacity
            }}
    
            />
        </Animated.View>
    )
}

export default Splash