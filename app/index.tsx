import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Expo Router</Text>
      <Link href={'home'}>Chez Mohya</Link>
    </View>
  );
}

