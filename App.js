// exercise 1============================
// import React from 'react';
// import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar} from 'react-native';
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//     },
//
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//     },
// })
//
// const datasource = [
//     {key: 'a'},
//     {key: 'b'},
//     {key: 'c'},
//     {key: 'd'},
//     {key: 'e'},
//     {key: 'f'},
//     {key: 'g'},
//     {key: 'h'},
//     {key: 'i'},
//     {key: 'j'},
//     {key: 'k'},
//     {key: 'l'},
//     {key: 'm'},
//     {key: 'n'},
//     {key: 'o'},
//     {key: 'p'},
//     {key: 'q'},
//     {key: 'r'},
//     {key: 's'},
//     {key: 't'},
//     {key: 'u'},
//     {key: 'v'},
//     {key: 'w'},
//     {key: 'x'},
//     {key: 'z'},
//     {key: 'x'},
//     {key: 'y'},
//     {key: 'z'},
//
// ];
//
// const renderItem = ({item}) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle} > {item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const App = () => {
//     return (
//         <View style={{marginBottom:20}}>
//             <StatusBar hidden={true}/>
//             <FlatList data={datasource} renderItem={renderItem} />
//
//         </View>
//     )
// }
//
// export default App;

//exercise 2============================
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, SectionList, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,

    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },

    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title: "Vowels", bgcolor: "#5ec1ac",},

    {data: [
            {key:'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
        ],
        title: "Consonants", bgcolor:"#7096df"},
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle} > {item.key}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={{marginBottom: 50, margin: 10}}>
            <StatusBar hidden={true}/>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default App;


