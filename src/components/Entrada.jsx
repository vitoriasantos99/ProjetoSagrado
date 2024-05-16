import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, View, Image, TouchableOpacity } from "react-native";

export default props => {
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [endereco,setEndereco] = useState('')
    const [numero,setNumero] = useState('')
    const [cep,setCep] = useState('')
    const [cidade,setCidade] = useState('')
    const [estado,setEstado] = useState('')

    const [cadastro,setCadastro] = useState('')
    const [altera,setAltera] = useState('')
    const [apaga,setApaga] = useState('')
    const [pesquisa,setPesquisa] = useState('')

    cadastrar = () => {
        setCadastro("Produto Cadastrado")
    }

    alterar = () => {
        setAltera("Alteração feita com sucesso")
    }

    apagar = () => {
        setApaga("Produto excluido")
    }

    pesquisar = () =>{
        setPesquisa("Produto encontrado")
    }

    return(
        <SafeAreaView>
            
            <View style={direcao.posicao}>
                <Image
                    source={require('../images/africa.png')}
                    style={imagem.logo}
                />

                <Text style={style.menu}>Sagrado Feminino Hair</Text>
            </View>

            <View style={style.todos}>
                <TextInput
                    style={style.fundo}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Nome"
                    placeholderTextColor="#ffffff"
                    keyboardType="email-address"
                    cursorColor="#ffffff"
                />
                <TextInput
                    style={style.fundo}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="E-mail"
                    placeholderTextColor="#ffffff"
                    keyboardType="email-address"
                    cursorColor="#ffffff"
                />
            </View>

            <View style={tel.fundo}>
                <TextInput
                    style={style.fundo}
                    onChangeText={setTelefone}
                    value={telefone}
                    placeholder="Telefone"
                    placeholderTextColor="#ffffff"
                    keyboardType="numeric"
                    cursorColor="#ffffff"
                />
            </View>

            <TextInput
                style={style.fundo}
                onChangeText={setEndereco}
                value={endereco}
                placeholder="Endereço"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                cursorColor="#ffffff"
            />

            <View style={direcao.posicao}>
                <View style={num.fundo}>
                    <TextInput
                        style={style.fundo}
                        onChangeText={setNumero}
                        value={numero}
                        placeholder="Número"
                        placeholderTextColor="#ffffff"
                        keyboardType="numeric"
                        cursorColor="#ffffff"
                    />
                </View>

                <View style={cepi.fundo}>
                    <TextInput
                        style={style.fundo}
                        onChangeText={setCep}
                        value={cep}
                        placeholder="CEP"
                        placeholderTextColor="#ffffff"
                        keyboardType="numeric"
                        cursorColor="#ffffff"
                    />
                </View>
            </View>

            <TextInput
                style={style.fundo}
                onChangeText={setCidade}
                value={cidade}
                placeholder="Cidade"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                cursorColor="#ffffff"
            />

            <TextInput
                style={style.fundo}
                onChangeText={setEstado}
                value={estado}
                placeholder="Estado"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                cursorColor="#ffffff"
            />
            
            <View style={geral.fundo1}> 
                    <TouchableOpacity
                    onPress={cadastro}
                    style={{
                        width: 100,
                        backgroundColor: "#ac635b",
                        color: "white",
                    }}>
                        <Text style={{
                        color: "white",
                        textAlign: 'center',
                    }}>Cadastrar</Text>
                    </TouchableOpacity>

                    <Button
                    title="Alterar"
                    onPress={altera}
                    color={"#ac635b"}
                    />
            </View>

            <View style={geral.fundo2}>
                <Button
                    title="Pesquisar"
                    onPress={pesquisa}
                    color={"#ac635b"}
                    />

                <Button
                    title="Excluir"
                    onPress={apaga}
                    color={"#ac635b"}
                />
            </View>
            

            <View>
                <Text style={resposta.texto}>{cadastro}</Text>
                <Text style={resposta.texto}>{altera}</Text>
                <Text style={resposta.texto}>{apaga}</Text>
                <Text style={resposta.texto}>{pesquisa}</Text>
            </View>
        
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            textAlign: 'left',
            backgroundColor: '#ac635b',
            margin: 3,
            borderColor: '#ac635b',
            borderRadius: 10,
            // borderRadius: 4,
        },
        menu:{
            textAlign: 'center',
            fontSize: 25,
            color: '#ffd1c1',
        },
    }
)

const geral = StyleSheet.create(
    {
        fundo1:{
            paddingLeft: 100,
            paddingRight: 100,
            flexGrow: 1,
            flexDirection: "row",
            alignItems: 'center',
            marginBottom: 10,
            justifyContent: 'center',
            marginTop: 10,
            justifyContent: 'space-between',

        },
        fundo2:{
            paddingLeft: 100,
            paddingRight: 100,
            flexGrow: 1,
            flexDirection: "row",
            alignItems: 'center',
            marginBottom: 10,
            justifyContent: 'center',
            marginTop: 10,
            justifyContent: 'space-between',
        }
    }
)

const imagem = StyleSheet.create(
    {
        logo:{
            width: 100,
            height: 100,
            margin: 10,
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

const tel = StyleSheet.create(
    {
        fundo:{
            height: 50,
            width: 250,
            }
        
    }
)

const num = StyleSheet.create(
    {
        fundo:{
            height: 45,
            width: 200,
        }
    }
)

const cepi = StyleSheet.create(
    {
        fundo:{
            height: 45,
            width: 200,
            
        }
    }
)

const direcao = StyleSheet.create(
    {
        posicao:{
            alignSelf: 'flex-start',
            flexGrow: 1,
            flexDirection: "row"
        }
    }
)