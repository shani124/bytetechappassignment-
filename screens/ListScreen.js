import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List } from 'react-native-paper';

const ListScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://hisocars.techinnsoft.com/api/Booking/get-hot-offer')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Print the fetched data in the console
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item title={item.brandName}/>
        )}
      />
    </View>
  );
};

export default ListScreen;