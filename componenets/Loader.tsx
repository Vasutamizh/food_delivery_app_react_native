import { ActivityIndicator, View } from 'react-native';

const Loader = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator 
      size="large"  // 'small' | 'large'
      color="#0000ff" 
    />
  </View>
);

export default Loader;