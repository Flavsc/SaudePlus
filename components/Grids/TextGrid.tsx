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
                    { name: "func1", id: 1 },
                    { name: "func2", id: 2 },
                    { name: "func3", id: 3 },
                    { name: "func4", id: 4 },
                    { name: "func5", id: 5 },
                    { name: "func6", id: 6 },
                    { name: "func7", id: 7 },
                    { name: "func8", id: 8 },
                    { name: "func9", id: 9 }
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
        backgroundColor: accent,
        borderRadius: 15,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    title: { color: white, fontSize: 25 }
});
