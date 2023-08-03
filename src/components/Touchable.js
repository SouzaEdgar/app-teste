// Alternativa para o botão padrão, visto que o mesmo possui algumas diferenças entre a sua configuração (estilo) de Android e iOS

import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

export default function() {

    const [cont, setCont]=useState(0)

    const girar = function () {
        if (cont >= 360) return setCont(0)
        else setCont(cont + 90)
    }

    return (
        <View>
            <TouchableHighlight style={estilos.botao} onPress={girar}>
                <Text>GIRAR</Text>
            </TouchableHighlight>
            <Text>{cont}°</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    botao: {
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 15,
    }
})