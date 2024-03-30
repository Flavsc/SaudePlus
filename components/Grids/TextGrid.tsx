import { colors } from "components/colors";
import SmallContainer from "components/containers/SmallContainer";
import RegularText from "components/texts/RegularText";
import { View, StyleSheet } from "react-native";

import GridView from "./GridView";

const { primary, accent, white } = colors;

export default function TextGrid() {
    return (
        <SmallContainer>
            <GridView
                data={[
                    { name: "text1", id: 1 },
                    { name: "text2", id: 2 },
                    { name: "text3", id: 3 },
                    { name: "text4", id: 4 },
                    { name: "text5", id: 5 },
                    { name: "text6", id: 6 },
                    { name: "text7", id: 7 },
                    { name: "text8", id: 8 },
                    { name: "text9", id: 9 }
                ]}
                renderItem={(item) => (
                    <View style={styles.itemContainer}>
                        <RegularText style={styles.title}>
                            {item.name}
                        </RegularText>
                    </View>
                )}
            />
        </SmallContainer>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 80,
        width: 80,
        backgroundColor: white,
        borderRadius: 15,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    title: { color: accent, fontSize: 25 }
});
