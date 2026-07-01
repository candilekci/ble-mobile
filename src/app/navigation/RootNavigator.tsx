import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { useTranslation } from 'react-i18next';

import { BottomTabNavigator } from '@/app/navigation/BottomTabNavigator';
import { SettingsScreen, DeviceList } from '@/screens/index';

export type RootStackParamList = {
  MainTabs: undefined;
  Settings: undefined;
  BleDeviceList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: t('navigation.settings') }}
      />
      <Stack.Screen
        name="BleDeviceList"
        component={DeviceList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
