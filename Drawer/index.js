import 'react-native-gesture-handler';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import News from './../Screen/News';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('News')}
        title="Welcome to the news!!"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer drawerContent={(props)=> <Menu {...props}/>}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={News}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
