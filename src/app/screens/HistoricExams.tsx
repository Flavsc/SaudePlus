import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { GPT } from '../utils/openai'; 

export default function HistoricExams({ navigation }: { navigation: any }) {
    const [examData, setExamData] = useState<any[]>([]);

    const fetchGPTData = async () => {
        try {
            const data = await GPT();
            const parsedData = parseResponse(data);
            setExamData(parsedData);
        } catch (error) {
            console.error(error);
        }
    };

    const parseResponse = (response: any) => {
        const lines = response.split('\n');
        return lines.map((line: any) => {
            const [testName, referenceRange] = line.split(':');
            if (testName && referenceRange) {
                return { testName: testName.trim(), referenceRange: referenceRange.trim() };
            }
            return null;
        }).filter((item: any) => item !== null);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.smallContainer}>
                <Button title="GPT" onPress={fetchGPTData} />
            </View>
            <ScrollView style={styles.scrollContainer}>
                {examData.map((item, index) => (
                    <View style={styles.itemContainer} key={index}>
                        <Text style={styles.testName}>{item.testName}</Text>
                        <Text style={styles.referenceRange}>{item.referenceRange}</Text>
                    </View>
                ))}
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
    itemContainer: {
        marginBottom: 15,
    },
    testName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    referenceRange: {
        fontSize: 14,
        color: 'gray',
    },
});