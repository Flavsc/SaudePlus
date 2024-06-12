import React, { useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RegularText from 'components/texts/RegularText';
import RegularButton from "components/Buttons/RegularButton";
import MainContainer from 'components/containers/MainContainer';
import BigText from 'components/texts/BigText';
import SmallContainer from 'components/containers/SmallContainer';

interface Appointment {
  id: string;
  date: Date;
}

const MedicalAppoitment = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const addAppointment = () => {
    setAppointments([...appointments, { id: Math.random().toString(), date }]);
  };

return (
    <MainContainer style={styles.container}>
        <Image 
                source={require("../../../assets/calendario.png")}
                style={{width: 100, height: 100, marginBottom: 10}}
        />
        <RegularText style={{fontSize: 20}}>
                Selecione a data e horário da consulta
        </RegularText>
        <SmallContainer style={{flexDirection: "row", flexWrap: "wrap", gap: 10, marginVertical: 20}}>
            <RegularButton onPress={() => showMode('date')} style={{width: 100}}> 
                Data
            </RegularButton>
            <RegularButton onPress={() => showMode('time')} style={{width: 100}}> 
                Horário
            </RegularButton>
            <RegularButton onPress={addAppointment}>Marcar Consulta</RegularButton>
        </SmallContainer>
        {show && (
            <DateTimePicker
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        )}
        <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text style={styles.appointmentItem}>
                    {item.date.toLocaleString()}
                </Text>
            )}
        />
    </MainContainer>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appointmentItem: {
    padding: 5,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MedicalAppoitment;
