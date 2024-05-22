import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "firebase/Config"; 
import { IconButton } from 'react-native-paper';
import StyledTextInput from 'components/Inputs/StyledTextInput';
export var globalEmail: string;

export default function GoogleModal({ navigation }: { navigation: any }) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  globalEmail = email;

  async function login(): Promise<void> {
    try {
        if (email && password == null) {
            alert("Campo vazio!");
        }
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        console.log("Usuário autenticado:", user);
        navigation.navigate("PaginaInicial");
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Usuário ou senha inválidos");
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login Google</Text>
            <Image 
            style={{ width: 100, height: 100 }}
            source={require('../../assets/GoogleImg.png')}
            />
            <StyledTextInput
                label="E-mail"
                icon="email-variant"
                value={email}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
                keyboardType="email-address"
                style={{ marginBottom: 20 }}
            />
            <StyledTextInput
                label="Senha"
                icon="lock-open"
                value={password}
                onChangeText={setPassword}
                placeholder="Sua Senha"
                isPassword
                style={{ marginBottom: 5 }}
            />
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => login()}
            >
              <Text  style={styles.textStyle}>Login</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <IconButton
        icon={'google'}
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#e9e0eb',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 20,
    borderRadius: 30,
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
      textAlign: 'center',
      fontSize: 20,
      textDecorationLine: 'underline',
  },
});
