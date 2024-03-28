import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal
} from "react-native";
import "./src/app/assets/logo_sao_camilo.png";

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                source={require("./src/assets/logo_sao_camilo.png")}
                style={styles.logo_sao_camilo}
            />
            <Text style={styles.tituloGestaoSaude}>Saude Plus</Text>

            <TouchableOpacity style={styles.btnProximo}>
                <Text style={styles.txtBtnProximo}>Proximo</Text>
            </TouchableOpacity>

            <Text style={styles.txtConsulta}>Consulte seus exames médicos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    logo_sao_camilo: {
        marginTop: 60,
        marginBottom: 60,
        width: 200,
        height: 200
    },
    tituloGestaoSaude: {
        fontSize: 20,
        fontWeight: "bold"
    },
    txtConsulta: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    btnProximo: {
        backgroundColor: "#991A1A",
        padding: 10,
        borderRadius: 25,
        marginTop: 20,
        position: "absolute",
        bottom: 10,
        right: 10
    },
    txtBtnProximo: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
});
