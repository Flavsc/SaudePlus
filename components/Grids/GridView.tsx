import SmallContainer from "components/containers/SmallContainer";
import { FC } from "react";
import { View, StyleSheet } from "react-native";

interface Props<T> {
    data: T[];
    renderItem(item: T): JSX.Element;
    col?: number;
}

const GridView = <T extends any>(props: Props<T>) => {
    const { data, renderItem, col = 2 } = props;

    return (
        <SmallContainer style={styles.container}>
            {data.map((item, index) => {
                return (
                    <View key={index} style={{ margin: 10 }}>
                        {renderItem(item)}
                    </View>
                );
            })}
        </SmallContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

export default GridView;
