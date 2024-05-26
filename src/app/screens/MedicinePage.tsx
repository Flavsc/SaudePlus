import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Modal, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MedicinePage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [medicineName, setMedicineName] = useState('');
    const [medicineQuantity, setMedicineQuantity] = useState('');
    const [intervalHours, setIntervalHours] = useState('');
    const [intervalMinutes, setIntervalMinutes] = useState('');
    const [medicines, setMedicines] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        loadMedicines();
    }, []);

    const calculateNextTime = (hours, minutes) => {
        const now = new Date();
        now.setHours(now.getHours() + parseInt(hours));
        now.setMinutes(now.getMinutes() + parseInt(minutes));
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const saveMedicines = async (medicines) => {
        try {
            const jsonValue = JSON.stringify(medicines);
            await AsyncStorage.setItem('medicines', jsonValue);
        } catch (e) {
            console.error('Failed to save medicines:', e);
        }
    };

    const loadMedicines = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('medicines');
            if (jsonValue != null) {
                setMedicines(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.error('Failed to load medicines:', e);
        }
    };

    const handleAddMedicine = () => {
        const interval = `${intervalHours}h ${intervalMinutes}m`;
        const nextTime = calculateNextTime(intervalHours, intervalMinutes);
        let updatedMedicines;
        if (editingIndex !== null) {
            updatedMedicines = [...medicines];
            updatedMedicines[editingIndex] = { name: medicineName, quantity: medicineQuantity, interval, nextTime };
            setEditingIndex(null);
        } else {
            updatedMedicines = [...medicines, { name: medicineName, quantity: medicineQuantity, interval, nextTime }];
        }
        setMedicines(updatedMedicines);
        saveMedicines(updatedMedicines);
        setMedicineName('');
        setMedicineQuantity('');
        setIntervalHours('');
        setIntervalMinutes('');
        setModalVisible(false);
    };

    const handleDeleteMedicine = () => {
        const updatedMedicines = medicines.filter((_, index) => index !== editingIndex);
        setMedicines(updatedMedicines);
        saveMedicines(updatedMedicines);
        setEditingIndex(null);
        setModalVisible(false);
    };

    const handleCancel = () => {
        setMedicineName('');
        setMedicineQuantity('');
        setIntervalHours('');
        setIntervalMinutes('');
        setEditingIndex(null);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={medicines}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.medicineItem}
                        onPress={() => {
                            setEditingIndex(index);
                            setMedicineName(item.name);
                            setMedicineQuantity(item.quantity);
                            const [hours, minutes] = item.interval.split(' ');
                            setIntervalHours(hours.replace('h', ''));
                            setIntervalMinutes(minutes.replace('m', ''));
                            setModalVisible(true);
                        }}>
                        <Text style={styles.medicineText}>{item.name} - {item.quantity} ml</Text>
                        <Text style={styles.medicineTime}>{item.nextTime}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    setMedicineName('');
                    setMedicineQuantity('');
                    setIntervalHours('');
                    setIntervalMinutes('');
                    setEditingIndex(null);
                    setModalVisible(true);
                }}>
                <Icon name="add" size={30} color="#fff" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome do remédio"
                            value={medicineName}
                            onChangeText={setMedicineName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantidade (ml)"
                            value={medicineQuantity}
                            onChangeText={setMedicineQuantity}
                            keyboardType="numeric"
                        />
                        <View style={styles.intervalContainer}>
                            <TextInput
                                style={styles.intervalInput}
                                placeholder="Horas"
                                value={intervalHours}
                                onChangeText={setIntervalHours}
                                keyboardType="numeric"
                            />
                            <Text style={styles.intervalText}>h</Text>
                            <TextInput
                                style={styles.intervalInput}
                                placeholder="Minutos"
                                value={intervalMinutes}
                                onChangeText={setIntervalMinutes}
                                keyboardType="numeric"
                            />
                            <Text style={styles.intervalText}>m</Text>
                        </View>
                        <Button title="Salvar" onPress={handleAddMedicine} />
                        {editingIndex !== null && (
                            <Button title="Excluir" onPress={handleDeleteMedicine} color="red" />
                        )}
                        <Button title="Cancelar" onPress={handleCancel} color="gray" />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    addButton: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
        zIndex: 1,
    },
    medicineItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    medicineText: {
        fontSize: 16,
    },
    medicineTime: {
        fontSize: 16,
        color: '#888'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    intervalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    intervalInput: {
        flex: 1,
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
    },
    intervalText: {
        marginHorizontal: 5,
        fontSize: 16,
    },
});

export default MedicinePage;
