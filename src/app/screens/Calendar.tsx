import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class Calendar extends Component {
    constructor(props: object) {
        super(props);
        this.state = {
            selectedStartDate: null
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date: any) {
        this.setState({
            selectedStartDate: date
        });
    }

    render() {
        const { selectedStartDate } = this.state as {
            selectedStartDate: Date | null;
        };
        const startDate = selectedStartDate ? selectedStartDate.toString() : "";
        return (
            <View style={this.styles.container}>
                <CalendarPicker onDateChange={this.onDateChange} />
                <View style={this.styles.textoDiaSelecionado}>
                    <Text>Dia selecionado:{startDate}</Text>
                </View>
                <View style={this.styles.txtSobreNos}>
                    <Text style={this.styles.txtMarcarConsulta}>
                        Selecione o dia para marcar sua consulta
                    </Text>
                </View>
            </View>
        );
    }

    public styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#FFFFFF"
        },
        textoDiaSelecionado: {
            marginLeft: 20,
            marginTop: 20
        },
        txtSobreNos: {
            backgroundColor: "rgba(55, 219, 151, 0.5)",
            borderRadius: 10,
            width: 300,
            height: 50,
            position: "absolute",
            bottom: 225,
            left: 32,
            marginTop: 150,
            justifyContent: "center",
            alignItems: "center"
        },
        txtMarcarConsulta: {
            fontSize: 15,
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "black"
        }
    });
}
