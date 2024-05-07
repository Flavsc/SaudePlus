import MainContainer from "components/containers/MainContainer";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

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

    const DESTINATION = {
        latitude: -23.629034336897714,
        longitude: -46.57953547841175
    };

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
            >
                <MapViewDirections
                    origin={location?.coords}
                    destination={DESTINATION}
                    apikey="AIzaSyDf0YzOeWG_Nd7nZ84Js71zskONgzQPEPc"
                    strokeWidth={3}
                    strokeColor="blue"
                />
            </MapView>
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
