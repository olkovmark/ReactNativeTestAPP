import { Main } from "./Main";
import { FullPhoto } from "./FullPhoto";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();


export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Photo" component={FullPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
