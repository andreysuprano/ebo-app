import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CodigoDeBarras from '../screens/CodigoDeBarras';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Router() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            size = 32;

            switch (route.name) {
              case 'EBO App':
                iconName = 'home';
                break;
              case 'Pagamento':
                iconName = 'cash-outline';
                break;
              case 'Presença':
                iconName = 'chevron-down-circle-outline';
                break;
              case 'QR Code':
                iconName = 'barcode-outline';
                break;
            }
      
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle:{
            fontSize:12
          },
          tabBarActiveTintColor: '#EB5234',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{
            height:'10%'
          },
          headerShown:false,
        })}
      >
          <Tab.Screen name="EBO App" component={HomeScreen} />
          <Tab.Screen name="Pagamento" component={SettingsScreen} />
          <Tab.Screen name="Presença" component={SettingsScreen} />
          <Tab.Screen name="QR Code" component={CodigoDeBarras} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

export default Router;