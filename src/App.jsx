import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./components/estilo";
import Menu from "./components/Menu";
import Entrada from "./components/Entrada";
import Sagrado from "./components/Sagrado";


export default () =>{
    return(
        <View style={hair.fundo}>
            {/* <Menu/> */}
            <Entrada/>
            {/* <Sagrado/> */}
        </View>
    )
} 

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor: "#4f1175",
            flexGrow: 1,    
        }
    }
)

const hair = StyleSheet.create(
    {
        fundo: { 
            backgroundColor: "#89443d",
            flexGrow: 1,  
        }
    }
)