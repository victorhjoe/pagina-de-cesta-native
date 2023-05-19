import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";

const Cesta = ({topo, detalhes, itens}) => {
    return <SafeAreaView style={{ flex: 1 }}>
        <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo} >{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />

        </>
    </SafeAreaView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
}
)

export default Cesta;