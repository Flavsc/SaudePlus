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
            </View>
        );
    }

    public styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#FFFFFF",
            marginTop: 100
        }
    });
}
