import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import RegularButton from 'components/Buttons/RegularButton';
import RegularText from 'components/texts/RegularText';
import MainContainer from 'components/containers/MainContainer';
import SmallContainer from 'components/containers/SmallContainer';
import BigText from 'components/texts/BigText';

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
    <MainContainer>
      <BigText style={{marginBottom: 10, textDecorationLine: 'underline'}}>
        Selecione o exame
      </BigText>
      <RegularButton onPress={selectFile} style={{marginBottom: 10}}>Selecionar Arquivo</RegularButton>
      {selectedFile ? (
        <SmallContainer>
          <RegularText>Arquivo Selecionado:</RegularText>
          <RegularText>{selectedFile.name}</RegularText>
          <RegularText>Tipo: {selectedFile.type}</RegularText>
          <RegularText>Tamanho: {selectedFile.size} bytes</RegularText>
        </SmallContainer>
      ) : (
        <Text>Nenhum arquivo selecionado</Text>
      )}
      <RegularButton style={{position: "absolute", bottom: 20, right: 10, width: 100}} onPress={() => navigation.navigate("Exames")}>
          Enviar
      </RegularButton>
    </MainContainer>
  );
};