import React, { useState } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const MedicalAppointment = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.log("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
  };

return (
    <View style={styles.centeredView}>
        <View style={{flex: 1, alignItems: "center", marginTop: 60}}>
            <Image 
                source={require("../../../assets/calendario.png")}
                style={{width: 200, height: 200, marginTop: -50}}
            />
        </View>
        <Text style={styles.textDay}>Escolha o dia para marcar a consulta</Text> 
        <View style={{alignItems: "center", marginBottom: 250}}>
            <Button title="Marcar Consulta" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
            <Text style={{textAlign: "center", flex: 1, bottom: 200}}>
                Consulta marcada para: {selectedDate ? selectedDate.toLocaleDateString() : "Nenhum dia selecionado"}
            </Text>
    </View>
);
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    textDay: {
        flex: 1, 
        marginTop: 100, 
        alignItems: "center", 
        justifyContent: "center", 
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },

})

export default MedicalAppointment;