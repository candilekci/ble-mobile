import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { HomeScreen } from '@/screens/Home/HomeScreen';
import { QuikLink } from '@/screens/QuikLink/QuikLink';

export type BottomTabParamList = {
  Home: undefined;
  QuikLink: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'Home'
              ? focused
                ? 'home'
                : 'home-outline'
              : focused
                ? 'link'
                : 'link-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          flex: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: t('navigation.home') }}
      />
      <Tab.Screen
        name="QuikLink"
        component={QuikLink}
        options={{ title: t('navigation.quikLink') }}
      />
    </Tab.Navigator>
  );
}
