import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Preload } from '@screens/Preload';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{
      headerShown: false
    }} >
      {/* A primeira rota definida será a rota inicial. */}
      <Screen name="preload" component={Preload} />
    </Navigator>
  )
} 