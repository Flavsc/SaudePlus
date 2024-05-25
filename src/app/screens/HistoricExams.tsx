import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { GPT } from '../utils/openai'; 

export default function HistoricExams({ navigation }: { navigation: any }) {
  const [examData, setExamData] = useState('');

  const fetchGPTData = async () => {
    try {
      const data = await GPT();
      if(!data) throw new Error('No data returned from GPT');
      setExamData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.smallContainer}>
        <Button title="GPT" onPress={fetchGPTData} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Text>{examData}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  smallContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
});
