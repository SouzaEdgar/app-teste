// Alternativa para o botão padrão, visto que o mesmo possui algumas diferenças entre a sua configuração (estilo) de Android e iOS

import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import Angle from './Angle.js'

export default function() {
// Obter numero aleatorio
const aleatorio = () => {
    let num = Math.random();
  
    num = Math.floor(num * 256);
    return num;
}

// Valor ° (graus)
    const [cont, setCont] = useState(0);
    const [nRed, setNRed] = useState(0);
    const [nGreen, setNGreen] = useState(0);
    const [nBlue, setNBlue] = useState(0);

    const girar=()=> {
        if (cont >= 360) {
            setCont(90)
            setNRed(aleatorio);
            setNGreen(aleatorio);
            setNBlue(aleatorio);
        } else {
            setCont(cont + 90)
            setNRed(aleatorio);
            setNGreen(aleatorio);
            setNBlue(aleatorio);
        };
    }

    return (
        <View style={[estilos.caixa, {flexDirection: 'column'}]}>
            <View style={[estilos.graus, {flexDirection: 'row'}]}>
                <Text style={estilos.texto}>{cont}</Text>
                <Text style={estilos.texto}>°</Text>
            </View>
            <View style={[estilos.pelicula, {
                width: 310, 
                height: 310, 
                borderRadius: 20,
                backgroundColor: `rgba(${nRed},${nGreen},${nBlue}, 0.455)`
            }]}/>
            <Image style={{
                width: 310, 
                height: 310, 
                borderRadius: 20,
                transform: [{rotate: `${cont}deg`}]
            }}
                source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1104539057998012496/image.png'}}/>
            
            
            <TouchableHighlight style={estilos.botao} onPress={girar}>
                <Text style={estilos.textoBotao}>GIRAR</Text>
            </TouchableHighlight>
        </View>
    );
}

const estilos = StyleSheet.create({
    caixa: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 8,
        backgroundColor: '#A9A9A9',
        height: '100%',
        width: '100%',
    },
    grau: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3'
    },
    pelicula: {
        zIndex: 2,
        position: 'absolute',
        top: '34.5%',
    },
    botao: {
        width: 120,
        height: 'auto',
        borderRadius: 20,
        backgroundColor: 'grey',
    },
    textoBotao: {
        fontSize: 25,
        margin: '20%',
    },
    texto: {
        fontSize: 120,
    }
}) 
