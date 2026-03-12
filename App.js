import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import SignInScreen from './screens/SignInScreen'
import ExplorerScreen from './screens/ExplorerScreen'
import AccountScreen from './screens/AccountScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// Bottom Tab
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === "Explorer") {
            iconName = "beer"
          }
          else if (route.name === "Account") {
            iconName = "user"
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />
        },

        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        headerShown: false
      })}
    >

      <Tab.Screen
        name="Explorer"
        component={ExplorerScreen}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}