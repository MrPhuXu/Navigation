import * as React from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
function Hoa({ route, navigation }) {
  const { maloai, tenloai } = route.params;
  var hoa = [{
    "maloai": 1,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Đón xuân",
    "dongia": 15000,
    "hinh": require('../assets/ImagesFlatListText/cuc_9.jpg'),
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  }, {
    "maloai": 2,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Hồn nhiên",
    "dongia": 60000,
    "hinh": require('../assets/ImagesFlatListText/cuc_2.jpg'),
    "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
  }, {
    "maloai": 3,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Tím thuỷ chung",
    "dongia": 45000,
    "hinh": require('../assets/ImagesFlatListText/cuc_3.jpg'),
    "mota": "Hoa cúc tím"
  }, {
    "maloai": 4,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Nét duyên tím hoa cà",
    "dongia": 40000,
    "hinh": require('../assets/ImagesFlatListText/cuc_4.jpg'),
    "mota": "Hoa cúc màu tím nhạt"
  }, {
    "maloai": 5,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Cùng khoe sắc",
    "dongia": 70000,
    "hinh": require('../assets/ImagesFlatListText/cuc_5.jpg'),
    "mota": "Hoa cúc các màu: trắng, vàng, cam"
  }, {
    "maloai": 6,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Trắng thơ ngây",
    "dongia": 65000,
    "hinh": require('../assets/ImagesFlatListText/cuc_6.jpg'),
    "mota": "Hoa cúc trắng"
  }, {
    "maloai": 7,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Dây tơ hồng",
    "dongia": 250000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_1.jpg'),
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  }, {
    "maloai": 8,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Cầu thuỷ tinh",
    "dongia": 220000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_2.jpg'),
    "mota": "Hoa hồng và hoa thuỷ tiên trắng"
  }, {
    "maloai": 9,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Duyên thầm",
    "dongia": 260000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_3.jpg'),
    "mota": "Hoa cúc trắng, baby, lá măng"
  }, {
    "maloai": 10,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Ðâm chồi nảy lộc",
    "dongia": 180000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_4.jpg'),
    "mota": "Hoa hồng trắng và các loại lá măng"
  }, {
    "maloai": 11,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Hoà quyện",
    "dongia": 270000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_5.jpg'),
    "mota": "Hoa hồng trắng, lá thuỷ tùng"
  }, {
    "maloai": 12,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Nồng nàn",
    "dongia": 210000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_6.jpg'),
    "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
  }, {
    "maloai": 13,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Together",
    "dongia": 120000,
    "hinh": require('../assets/ImagesFlatListText/hong_1.jpg'),
    "mota": "Hồng xác pháo, cúc tím"
  }, {
    "maloai": 14,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Long trip",
    "dongia": 85000,
    "hinh": require('../assets/ImagesFlatListText/hong_2.jpg'),
    "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
  }, {
    "maloai": 15,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Beautiful life",
    "dongia": 100000,
    "hinh": require('../assets/ImagesFlatListText/hong_3.jpg'),
    "mota": "Hoa hồng đỏ, lá măng, lá đệm"
  }, {
    "maloai": 16,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Morning Sun",
    "dongia": 75000,
    "hinh": require('../assets/ImagesFlatListText/hong_4.jpg'),
    "mota": "Hoa hồng vàng"
  }, {
    "maloai": 17,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Pretty Bloom",
    "dongia": 65000,
    "hinh": require('../assets/ImagesFlatListText/hong_5.jpg'),
    "mota": "Hoa hồng trắng và lá thông"
  }, {
    "maloai": 18,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Red Rose",
    "dongia": 45000,
    "hinh": require('../assets/ImagesFlatListText/hong_7.jpg'),
    "mota": "Hoa hồng đỏ và lá măng"
  }, {
    "maloai": 19,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Vấn vuơng",
    "dongia": 150000,
    "hinh": require('../assets/ImagesFlatListText/xuan_1.jpg'),
    "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
  }, {
    "maloai": 20,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Nắng nhẹ nhàng",
    "dongia": 50000,
    "hinh": require('../assets/ImagesFlatListText/xuan_2.jpg'),
    "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
  }, {
    "maloai": 21,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Thanh tao",
    "dongia": 120000,
    "hinh": require('../assets/ImagesFlatListText/xuan_3.jpg'),
    "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
  }, {
    "maloai": 22,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Tinh khiết",
    "dongia": 110000,
    "hinh": require('../assets/ImagesFlatListText/xuan_4.jpg'),
    "mota": "Hồng trắng và salem"
  }, {
    "maloai": 23,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Mùa xuân chín",
    "dongia": 150000,
    "hinh": require('../assets/ImagesFlatListText/xuan_5.jpg'),
    "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
  }, {
    "maloai": 24,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Rực rở nắng vàng",
    "dongia": 75000,
    "hinh": require('../assets/ImagesFlatListText/xuan_6.jpg'),
    "mota": "Hồng vàng và cúc vàng"
  }, {
    "maloai": 25,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Love Candy",
    "dongia": 95000,
    "hinh": require('../assets/ImagesFlatListText/hong_13.jpg'),
    "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
  }, {
    "maloai": 26,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Happy Wedding",
    "dongia": 210000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_9.jpg'),
    "mota": "Hoa hồng môn và các loại lá"
  }, {
    "maloai": 27,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Cúc nhiệt đới",
    "dongia": 150000,
    "hinh": require('../assets/ImagesFlatListText/cuc_15.jpg'),
    "mota": "Cúc vàng - h?ng cam - lá mang"
  }];
  const hoachon = hoa.filter(layhoatheoloai);
  function layhoatheoloai(hoa) {
    return hoa.tenloai == tenloai;
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.header}>Loại hoa: {tenloai}</Text>
      <FlatList
        data={hoachon}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ChiTietHoa', {
              tenhoa: item.tenhoa,
              dongia: item.dongia,
              mota: item.mota,
              hinh: item.hinh
            })
            }>
              <Image source={item.hinh} style={styles.Image} />
            </TouchableOpacity>
            <Text style = {styles.texttenHoa}> {item.tenhoa}</Text>
            <Text style = {styles.textgiahoa}> Giá bán: {item.dongia}</Text>
          </View>
        )}
      />
    </View>
  );
}
export default Hoa;

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    color: 'blue',
    textAlign: 'left',
    margin: 8,
  },
  texttenHoa: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
  },
  textgiahoa: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
  },
});