import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculoScreen from './screens/calculo/CalculoScreen';
import BhaskaraScreen from './screens/calculo/BhaskaraScreen';
import HomeScreen from './screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculo" component={CalculoScreen} />
        <Tab.Screen name="Bhaskara" component={BhaskaraScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
