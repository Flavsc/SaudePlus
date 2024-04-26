import MainContainer from "components/containers/MainContainer";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function Map() {
    const [location, setLocation] = useState<Location.LocationObject | null>(
        null
    );

    useEffect(() => {
        //roda uma vez quando app iniciar
        //na hora de entrar nesta tela, nao precisa permitir toda vez que é entrado
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permisao negada");
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -23.647896011188003,
                    longitude: -46.57428792037619,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                showsUserLocation //mostra usuario
                loadingEnabled //reiniciando o mapa, ira aparecer quando estiver carregando
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
});
