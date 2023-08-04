// Alternativa para o botão padrão, visto que o mesmo possui algumas diferenças entre a sua configuração (estilo) de Android e iOS

import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import Angle from './Angle.js'

export default function() {
// Valor ° (graus)
    const [cont, setCont] = useState(0);
    const girar=()=> {
        if (cont >= 360) {
            setCont(0)
        } else {
            setCont(cont + 90)
        };
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>{cont}°</Text>
            <Image style={{width: 40, height: 30,position: 'absolute', justifyContent: 'center', transform: [{rotate: `${cont}deg`}]}} source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1104539057998012496/image.png'}}/>
            <TouchableHighlight style={estilos.botao} onPress={girar}>
                <Text style={estilos.textoBotao}>GIRAR</Text>
            </TouchableHighlight>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    botao: {
        padding: 15,
        width: 105, //120,
        height: 105,//'auto',
        borderRadius: 50,
        backgroundColor: 'grey',
    },
    textoBotao: {
        fontSize: 25,
        marginTop: 15,
    },
    texto: {
        alignSelf: 'center',
        fontSize: 120,
    }
})
