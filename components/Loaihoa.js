import * as React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
function LoaiHoa({ navigation }) {

  const DATA = [
    { maloai: '1', tenloai: 'Hoa Quà tặng', HinhAnh: require('../assets/ImagesFlatListText/cuc_1.jpg'), ThanhPhan: 'Hoa cúc các màu: trắng, vàng, cam', },
    { maloai: '2', tenloai: 'Hoa Cưới', HinhAnh: require('../assets/ImagesFlatListText/cuoi_1.jpg'), ThanhPhan: 'Hoa hồng màu hồng đậm,hoa hồng xanh,các loại lá măng' },
    { maloai: '3', tenloai: 'Hoa Hồng',  HinhAnh: require('../assets/ImagesFlatListText/hong_1.jpg'), ThanhPhan: 'Hoa hồng và hoa thuỷ tiên trắng' },
    { maloai: '4', tenloai: 'Hoa Tình Yêu', HinhAnh: require('../assets/ImagesFlatListText/xuan_1.jpg'), ThanhPhan: 'Hoa cúc trắng,baby,lá măng' },
    ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text style = {styles.text}>{item.tenloai} </Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Hoa', {
              maloai: item.maloai,
              tenloai: item.tenloai
              });
            }}  >
              <Image source={item.HinhAnh} />
            </TouchableOpacity>
          </View>
        )}
      >
      </FlatList>
    </View>
  );
}
export default LoaiHoa;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'red',
    textAlign: 'justify',
    marginTop: 10,
  },

});