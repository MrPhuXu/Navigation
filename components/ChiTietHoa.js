import * as React from 'react';
// import LoaiHoa from './Loaihoa';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
function Hoa({ route, navigation }) {
    const { tenhoa, dongia, mota, hinh } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.texttenHoa}>{tenhoa}</Text>
            <Text style={styles.textgiahoa}> Giá bán: {dongia}</Text>
            <Text style={styles.textmota}> Mô tả: {mota}</Text>
            <Image source={hinh} style={styles.Image} />
            <Button title="Go to Home" onPress={() => navigation.navigate('LoaiHoa')} />
          
        </View>
    );
}
export default Hoa;

const styles = StyleSheet.create({
    texttenHoa: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
      },
      textgiahoa: {
        fontSize: 15,
        color: 'red',
        textAlign: 'center',
        marginBottom: 5,
      },
      textmota: {
        fontSize: 15,
        color: 'blue',
        textAlign: 'center',
      },
});