import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal, TouchableOpacity, ListRenderItemInfo } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

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
      <Button title="Adicionar Medicamento" onPress={handleAddMedication} color={'red'} />
    </View>
  );
};

// Componente de Item de Medicamento
const MedicationItem: React.FC<{ item: Medication; onEdit: () => void; onDelete: () => void }> = ({ item, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemDetails}>
        <Ionicons name="medkit" size={24} color="#ffffff" style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.name}</Text>
        <Ionicons name="time" size={24} color="#ffffff" style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.time.getHours().toString().padStart(2, '0')}:{item.time.getMinutes().toString().padStart(2, '0')}</Text>
      </View>
      <View style={styles.itemButtons}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Componente de Lista de Medicamentos
const MedicationList: React.FC<{ medications: Medication[]; onEditMedication: (medication: Medication) => void; onDeleteMedication: (id: string) => void }> = ({ medications, onEditMedication, onDeleteMedication }) => {
  const renderItem = ({ item }: ListRenderItemInfo<Medication>) => (
    <MedicationItem
      item={item}
      onEdit={() => onEditMedication(item)}
      onDelete={() => onDeleteMedication(item.id)}
    />
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
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleAddMedication = (medication: Medication) => {
    setMedications((current) => [...current, medication]);
  };

  const handleEditMedication = (medication: Medication) => {
    setSelectedMedication(medication);
    setEditModalVisible(true);
  };

  const handleDeleteMedication = (id: string) => {
    setSelectedMedication(medications.find(med => med.id === id) || null);
    setDeleteModalVisible(true);
  };

  const confirmEditMedication = () => {
    if (selectedMedication) {
      setMedications((current) =>
        current.map((med) => (med.id === selectedMedication.id ? selectedMedication : med))
      );
      setEditModalVisible(false);
      setSelectedMedication(null);
    }
  };

  const confirmDeleteMedication = () => {
    if (selectedMedication) {
      setMedications((current) => current.filter((med) => med.id !== selectedMedication.id));
      setDeleteModalVisible(false);
      setSelectedMedication(null);
    }
  };

  return (
    <View style={styles.container}>
      <MedicationForm onAddMedication={handleAddMedication} />
      <MedicationList
        medications={medications}
        onEditMedication={handleEditMedication}
        onDeleteMedication={handleDeleteMedication}
      />
      {/* Modal de Edição */}
      <Modal visible={isEditModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Medicamento</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do medicamento"
              value={selectedMedication?.name}
              onChangeText={(text) =>
                setSelectedMedication((current) =>
                  current ? { ...current, name: text } : null
                )
              }
            />
            <Button
              title="Escolher Horário"
              onPress={() => setEditModalVisible(false)}
              color={styles.button.color}
            />
            {selectedMedication && (
              <DateTimePicker
                value={selectedMedication.time}
                mode="time"
                display="default"
                onChange={(event, selectedDate) => {
                  setSelectedMedication((current) =>
                    current ? { ...current, time: selectedDate || current.time } : null
                  );
                }}
              />
            )}
            <Button title="Confirmar" onPress={confirmEditMedication} color={styles.button.color} />
            <Button title="Cancelar" onPress={() => setEditModalVisible(false)} color={styles.button.color} />
          </View>
        </View>
      </Modal>
      {/* Modal de Exclusão */}
      <Modal visible={isDeleteModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Excluir Medicamento</Text>
            <Text style={styles.modalMessage}>
              Tem certeza de que deseja excluir o medicamento "{selectedMedication?.name}"?
            </Text>
            <Button title="Confirmar" onPress={confirmDeleteMedication} color={styles.button.color} />
            <Button title="Cancelar" onPress={() => setDeleteModalVisible(false)} color={styles.button.color} />
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#ffffff',
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
    color: '#443331',
    backgroundColor: '#fff',
  },
  button: {
    color: 'blue',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#739986',
    backgroundColor: '#475950',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#ffffff',
    marginHorizontal: 5,
  },
  itemIcon: {
    marginHorizontal: 5,
  },
  itemButtons: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  editButton: {
    backgroundColor: '#739986',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});