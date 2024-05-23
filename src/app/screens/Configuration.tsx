import SPlus from "@assets/images/YELogo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegularButton from "components/Buttons/RegularButton";
import GridView from "components/Grids/GridView";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { View } from "react-native";

export default function Configuration({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 40 }}>Configurações</BigText>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <View style={{ width: "50%", padding: 5 }}>
                        <RegularButton
                            style={{
                                width: "100%",
                                height: 120,
                                marginBottom: 10
                            }}
                            onPress={() => navigation.navigate("NewEmail")}
                        >
                            Alterar E-mail
                        </RegularButton>
                        <RegularButton
                            style={{
                                width: "100%",
                                height: 120,
                                marginBottom: 10
                            }}
                            onPress={() =>
                                navigation.navigate("SupportContact")
                            }
                        >
                            Contatar suporte
                        </RegularButton>
                    </View>
                    <View style={{ width: "50%", padding: 5 }}>
                        <RegularButton
                            style={{
                                width: "100%",
                                height: 120,
                                marginBottom: 10
                            }}
                            onPress={() =>
                                navigation.navigate("PasswordForget")
                            }
                        >
                            Alterar Senha
                        </RegularButton>
                        <RegularButton
                            style={{
                                width: "100%",
                                height: 120,
                                marginBottom: 10
                            }}
                            onPress={() => navigation.navigate("DeleteEmail")}
                        >
                            Excluir conta
                        </RegularButton>
                    </View>
                </View>
            </SmallContainer>
        </MainContainer>
    );
}
