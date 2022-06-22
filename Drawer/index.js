import 'react-native-gesture-handler';
import { View, Button, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import News from './../Screen/News';
import Icon from "react-native-vector-icons/FontAwesome"
import s from './style'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('News')}
        title="Welcome to the news!!"
      />
			<Text>This is my project for TP3</Text>
    </View>
  );
}

function DrawerMenu(props){
	return(
			<TouchableOpacity onPress={props.navigation}>
					<View style={s.menuContainer}>
							<View style={s.iconoContainer}>
									<Icon size={17} name={props.iconName}/>
							</View>
							<View style={s.tituloContainer}>
									<Text style={s.tituloTxt}>{props.titleName}</Text>
							</View>
					</View>
			</TouchableOpacity>
	)
}

function Menu(props){
	return(
		<View style={s.container}>
				<View style={s.bgContainer}>
						<TouchableOpacity>
								<View style={s.userContainer}>
										<Image style={s.userImagen} source={ require('./../assets/logo.jpeg')}/>
										<View style={s.camaraContainer}>
												<Image style={s.camaraIcon} source={require('./../assets/photo-camera.png')}/>
										</View>
								</View>
								<View style={s.userNombre}>
										<Text style={s.userTitulo}>Ariadna Maldonado</Text>
										<Text style={s.userSubTitulo}>Ver Perfil</Text>
								</View>
						</TouchableOpacity>
				</View>
				<DrawerMenu iconName='home' titleName='Home' navigation={()=>props.navigation.navigate('Home')}/>
				<DrawerMenu iconName='user' titleName='News' navigation={()=>props.navigation.navigate('News')}/>
		</View>
)
}

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props)=> <Menu {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={News}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
