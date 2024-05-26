import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Definição dos tipos necessários
interface Medication {
  id: string;
  name: string;
  time: Date;
}

// Componente de Formulário de Medicamentos
const MedicationForm: React.FC<{ onAddMedication: (medication: Medication) => void }> = ({ onAddMedication }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleAddMedication = () => {
    if (name) {
      onAddMedication({ id: Date.now().toString(), name, time });
      setName('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome do medicamento"
        value={name}
        onChangeText={setName}
      />
      <Button title="Escolher Horário" onPress={() => setShowPicker(true)} color={styles.button.color} />
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || time;
            setShowPicker(false);
            setTime(currentDate);
          }}
        />
      )}
      <Button title="Adicionar Medicamento" onPress={handleAddMedication} color={styles.button.color} />
    </View>
  );
};

// Componente de Lista de Medicamentos
const MedicationList: React.FC<{ medications: Medication[] }> = ({ medications }) => {
  const renderItem = ({ item }: ListRenderItemInfo<Medication>) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.time.toLocaleTimeString()}</Text>
    </View>
  );

  return (
    <FlatList
      data={medications}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

// Tela Principal
const HomeScreen: React.FC = () => {
  const [medications, setMedications] = useState<Medication[]>([]);

  const handleAddMedication = (medication: Medication) => {
    setMedications((current) => [...current, medication]);
  };

  return (
    <View style={styles.container}>
      <MedicationForm onAddMedication={handleAddMedication} />
      <MedicationList medications={medications} />
    </View>
  );
};

// Componente Principal do App
export default function MedicinePage() {
  return (
    <View style={styles.appContainer}>
      <HomeScreen />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#475950',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#739986',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#fff',
  },
  button: {
    color: '#739986',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#739986',
    backgroundColor: '#475950',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    color: '#fff',
  },
});
