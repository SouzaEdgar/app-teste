// Alternativa para o botão padrão, visto que o mesmo possui algumas diferenças entre a sua configuração (estilo) de Android e iOS

import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import Angle from './Angle.js'

export default function() {
// Valor ° (graus)
    const [cont, setCont] = useState(0);
    const girar=()=> {
        if (cont >= 360) {
            setCont(90)
        } else {
            setCont(cont + 90)
        };
    }

    return (
        <View style={[estilos.caixa, {flexDirection: 'column'}]}>
            <View style={[estilos.graus, {flexDirection: 'row'}]}>
                <Text style={estilos.texto}>{cont}</Text>
                <Text style={estilos.texto}>°</Text>
            </View>
            <Image style={{width: 310, height: 310, borderRadius: 20, alignSelf: 'center', position: 'relative', transform: [{rotate: `${cont}deg`}]}} source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1104539057998012496/image.png'}}/>
            <TouchableHighlight style={estilos.botao} onPress={girar}>
                <Text style={estilos.textoBotao}>GIRAR</Text>
            </TouchableHighlight>
        </View>
    );
}

const estilos = StyleSheet.create({
    caixa: {
        //flexDirection: 'column',
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
    botao: {
        width: 120, //120,
        height: 'auto',//'auto',
        borderRadius: 20,
        backgroundColor: 'grey',
        //position: 'relative',
        //alignSelf: 'center',
        //shadowRadius:50 ,
    },
    textoBotao: {
        fontSize: 25,
        margin: '20%',
        //marginTop: 20,
        //marginVertical: '20%',
        //alignSelf: 'center',
    },
    texto: {
        fontSize: 120,
        position: 'relative',
    }
}) 
