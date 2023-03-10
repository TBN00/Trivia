import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "./components/HomeScreen"
import CategoryScreen from './components/CategoryScreen';
import QuestionScreen from './components/QuestionScreen';
import ScoreScreen from './components/ScoreScreen';

const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Category"
          component={CategoryScreen}
          />
          <Stack.Screen name="Questions"
          component={QuestionScreen} />
          <Stack.Screen name="Score"
          component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
