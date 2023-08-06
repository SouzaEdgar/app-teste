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
        <View style={estilos.container}>
            <Text style={estilos.texto}>{cont}°</Text>
            <Image style={{width: 310, height: 310, borderRadius: 20, alignSelf: 'center', position: 'relative', transform: [{rotate: `${cont}deg`}]}} source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1104539057998012496/image.png'}}/>
            <TouchableHighlight style={estilos.botao} onPress={girar}>
                <Text style={estilos.textoBotao}>GIRAR</Text>
            </TouchableHighlight>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: '#1F1F1F',
        // alignItems: 'center',
        margin:0 , 
        paddingTop: 100, 
        boxSizing: 'border-box',

    },
    botao: {
        padding: 15,
        width: 105, //120,
        height: 105,//'auto',
        borderRadius: 50,
        backgroundColor: 'grey',
        position: 'relative',
        marginTop: 120,
        alignSelf: 'center',
        shadowRadius:50 ,
    },
    textoBotao: {
        fontSize: 25,
        //marginTop: 20,
        marginVertical: '20%',
        alignSelf: 'center',
        marginTop: 18,
    },
    texto: {
        alignSelf: 'center',
        fontSize: 120,
        position: 'relative',
        paddingBottom: 40,
        marginTop: -30,
        marginBottom: 10,
        //backgroundColor: 'green'
    }
}) 
