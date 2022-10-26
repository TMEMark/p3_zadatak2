import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Test app</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Left</Text>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg',
            }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Right</Text>
          <Image
            style={styles.logo}
            source={require('./assets/snack-icon.png')}
          />
        </View>
      </View>

      {/* Image component */}

      {/* button component */}
      <Button title="Hello world" onPress={() => Alert.alert('Button pressed')} />

      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert('TouchableOpacity pressed')}>
        <Text style={styles.textStyle}>Touch</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F0FFFF',
  },
  header: {
    borderBottomWidth: 5,
    padding: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 34,
  },
  jumbotron: {
    flexDirection: 'row',
    margin: 10,
  },
  logo: {
    margin: 10,
    width: 100,
    height: 100,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
});
