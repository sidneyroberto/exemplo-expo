import { StyleSheet, View, Text } from 'react-native'

/**
 * No React Native, nós dizemos que
 * title é uma Props
 */
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})

export default Header
