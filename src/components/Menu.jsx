
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, Image, View, Alert } from "react-native";

export default props =>{
    const [usuario,setUsuario] = useState('')
    const [senha,setSenha] = useState('')

    const [resultado,setResultado] = useState('')
    const [result, setResult] = useState('')

    function entrar (usuario,senha){
        if (usuario === "vitoria" && senha === 123){
            console.warn ("Bem vindo")
        }
        else {
            console.warn ("Usuario e senha incorreto")
        }
    }

    
    return(
        <SafeAreaView style={style.menu}>

            <Image
                source={require('../images/men.png')}
                style={imagem.logo}
            />

            <TextInput
                style={style.fundo}
                onChangeText={setUsuario}
                value={usuario}
                placeholder="Insira seu usuário"
                keyboardType="email-address"
                cursorColor="#b4f0eb"
            />

            <TextInput
                style={style.fundo}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                placeholder="Insira sua Senha"
                keyboardType="numeric"
            />

            <Text style={style.novo}>Não tem usuário? Clique Aqui!</Text>
            
        <SafeAreaView>
            <View style={novo.botao}>  
                <Button
                title="Entrar"
                onPress={entrar}
                color={"#8544aa"}
                />
            </View>

            <View style={novo.botao}>
                <Button
                title="Sair"
                onPress={entrar}
                color={"#8544aa"}
                />
            </View>

            <Text style={resposta.texto}>{entrar}</Text>
            <Text style={resposta.texto}>{entrar}</Text>

        </SafeAreaView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            textAlign: 'center',
            borderWidth: 1,
            backgroundColor: '#8544aa',
            margin: 3,
            borderColor: '#612287'
        },
        novo:{
            textAlign: 'right',
            color: '#ffffff'
        },
        menu:{
        }
    }
)

const imagem = StyleSheet.create(
    {
        logo:{
            width: 180,
            height: 180,
            alignSelf: 'center',
            margin: 50,
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