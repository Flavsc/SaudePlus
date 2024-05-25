import SPlus from "@assets/images/YELogo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GridView from "components/Grids/GridView";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import React,  { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text,} from "react-native";
import { Button, TextInput} from "react-native-paper";
import { Overlay, Icon } from '@rneui/themed';

export default function MainPage({ navigation }: { navigation: any }) {

    const [visible, setVisible] = useState(false);
      
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const [text, setText] = React.useState('');

    return (
        <MainContainer>
            <BigText style={{position:'absolute',  top: 30}}>Remédios Salvos</BigText>             
                <Button 
                    mode="contained"
                    style={{ backgroundColor: "#739986", position: 'absolute', bottom: 16, right: 15}}
                    onPress={toggleOverlay}                                                                          
                >
                    Press Me
                </Button>
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <View style={{ width: 350, height: 350, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{position:'absolute',  top: 30}}>
                            Insira as informações do seu Remedio
                        </Text>
                        <TextInput
                            mode="outlined"
                            
                            label="Digite Nome do Remedio Aqui"
                            placeholder="Nome do Remedio"
                            
                            style={{width:300}}
                        />
                    </View>    
                </Overlay>                   
                

        </MainContainer>
    );
}

