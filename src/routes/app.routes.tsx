import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Preload } from '@screens/Preload';
import { Welcome } from "@screens/Welcome";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <Navigator screenOptions={{
      headerShown: false
    }} >
      {/* A primeira rota definida será a rota inicial. */}
      {loading ?
        <Screen name="preload" component={Preload} />
        :
        <Screen name="welcome" component={Welcome} />
      }
    </Navigator>
  )
} 