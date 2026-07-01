import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { AppHeader } from '@/components/AppHeader';

export function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>
        <Text style={styles.title}>{t('screens.home.title')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
