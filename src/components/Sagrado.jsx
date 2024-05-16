
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, Image, View, Alert } from "react-native";

export default props =>{
    const [usuario,setUsuario] = useState('')
    const [senha,setSenha] = useState('')
    const [aviso,setAviso] = useState('')
    const [erro,setErro] = useState('')
    const [sair1,setSair] = useState('')

    function entrar (){
        if (usuario === "vitoria" && senha === '123'){
            setAviso ("Bem vindo")
        }
        else {
            setErro ("Usuário ou senha incorreto")
        }
    }
    
    function sair () {
        setSair ("Até breve")
    }

    return(
        <SafeAreaView style={style.menu}>
            <Text style={style.menu}>Sagrado Feminino Hair</Text>
            <Image
                source={require('../images/africa.png')}
                style={imagem.logo}
            />

            <TextInput
                style={style.fundo}
                onChangeText={setUsuario}
                value={usuario}
                placeholder="Insira seu usuário"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                cursorColor="#ffffff"
            />

            <TextInput
                style={style.fundo}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                placeholder="Insira sua Senha"
                placeholderTextColor="#ffffff"
                keyboardType="numeric"
                cursorColor="#ffffff"
            />

            <Text style={style.novo}>Não tem usuário? Clique Aqui!</Text>
            
        <SafeAreaView>
            <View style={novo.botao}>  
                <Button
                title="Entrar"
                onPress={entrar}
                color={"#ac635b"}
                />
            </View>

            <View style={novo.botao}>
                <Button
                title="Sair"
                onPress={sair}
                color={"#ac635b"}
                />
            </View>

            <Text style={resposta.texto}>{aviso}</Text>
            <Text style={resposta.texto}>{erro}</Text>
            <Text style={resposta.texto}>{sair1}</Text>

        </SafeAreaView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            textAlign: 'center',
            borderWidth: 1,
            backgroundColor: '#ac635b',
            margin: 3,
            borderColor: '#ac635b',
            borderRadius: 10,
            fontSize: 18,
        },
        novo:{
            textAlign: 'right',
            padding: 5,
            color: "#ffd1c1"
        },
        menu:{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 25,
            margin: 20,
            color: '#ffd1c1',
        }
    }
)

const imagem = StyleSheet.create(
    {
        logo:{
            width: 180,
            height: 180,
            alignSelf: 'center',
            margin: 10,
        }
    }
)

const novo = StyleSheet.create(
    {
        botao:{
            marginLeft: 30,
            marginRight: 30,
            margin: 5,
        }
    }
)

const resposta = StyleSheet.create(
    {
        texto:{
            textAlign: 'center',
            fontSize: 30,
        }
    }
)