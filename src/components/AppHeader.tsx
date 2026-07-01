import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { RootStackParamList } from '@/app/navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function AppHeader() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Pressable
        onPress={() => navigation.navigate('Settings')}
        hitSlop={12}
        style={styles.settingsButton}
      >
        <Ionicons name="settings-outline" size={26} color="#333" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  settingsButton: {
    padding: 4,
  },
});
