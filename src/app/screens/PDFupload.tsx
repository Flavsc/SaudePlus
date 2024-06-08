import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import RegularButton from 'components/Buttons/RegularButton';
import RegularText from 'components/texts/RegularText';
interface SelectedFile {
    uri: string;
    name: string;
    size: number;
    type: string;
  }
export default function PDFUploader({ navigation }: { navigation: any }) {
    const [selectedFile, setSelectedFile] =  useState<SelectedFile | null>(null);

    const selectFile = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync();
        if (result.type === 'success') {
          setSelectedFile(result);
        }
      } catch (err) {
        console.error('Error selecting file:', err);
      }
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RegularButton onPress={selectFile}>Selecionar Arquivo</RegularButton>
      {selectedFile ? (
        <View style={{ marginTop: 20 }}>
          <RegularText>Arquivo Selecionado:</RegularText>
          <RegularText>{selectedFile.name}</RegularText>
          <RegularText>Tipo: {selectedFile.type}</RegularText>
          <RegularText>Tamanho: {selectedFile.size} bytes</RegularText>
        </View>
      ) : (
        <Text>Nenhum arquivo selecionado</Text>
      )}
      <RegularButton onPress={navigation.navigate("Exames")}>Ver os resultados</RegularButton>
    </View>
  );
};

