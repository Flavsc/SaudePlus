import MainContainer from "components/containers/MainContainer";
import * as React from "react";
import { Button, Avatar, Card, IconButton } from "react-native-paper";

export default function MedicalAppoitment({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <Card.Title
                title="Teste Nome"
                subtitle="Teste exame"
                left={(props) => (
                    <Avatar.Icon {...props} icon="alpha-c-box-outline" />
                )}
                right={(props) => (
                    <IconButton
                        {...props}
                        icon="dots-vertical"
                        onPress={() => {}}
                    />
                )}
            />

            <Button
                icon="plus"
                mode="contained"
                onPress={() => console.log("Pressed")}
            >
                Adicionar Consulta
            </Button>
        </MainContainer>
    );
}
