import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Header from './components/Header'

// Função JavaScript
const App = () => {
  // Estado OU State
  const [numberOfWords, setNumberOfWords] = useState(0)

  const countWords = (sentence) => {
    let number = 0
    if (sentence) {
      number = sentence.trim().split(' ').length
    }
    setNumberOfWords(number)
  }

  return (
    <View>
      <Header title='Meu app' />
      <View style={styles.container}>
        <TextInput
          placeholder='Digite uma frase'
          onChangeText={countWords}
          style={styles.sentenceInput}
        />
        <Text> {`Quantidade palavras: ${numberOfWords}`} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sentenceInput: {
    borderWidth: 2,
    height: 40,
    width: 250,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default App
