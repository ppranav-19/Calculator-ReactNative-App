import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light'); // Toggle between 'light' and 'dark'

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(input).toString()); // Basic evaluation
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'π') {
      Alert.alert('Value of π', 'The value of π (pi) is approximately 3.14159');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput(input + value);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const buttons = [
    ['C', 'π', '⌫', '/'], // Replaced "sin" with "π" and "cos" with "⌫"
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '='], // Rearranged '=' to span two boxes
  ];

  const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <SafeAreaView style={styles.container}>
      {/* Dark/Light Mode Toggle Button */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Text style={styles.themeText}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </Text>
      </TouchableOpacity>

      {/* Display Section */}
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((buttonValue, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.button,
                  buttonValue === '=' && styles.equalsButton,
                  buttonValue === '0' && styles.zeroButton, // Style the "0" button
                ]}
                onPress={() => handlePress(buttonValue)}
                disabled={buttonValue === ''} // Disable empty buttons if any
              >
                <Text
                  style={[
                    styles.buttonText,
                    buttonValue === '=' && styles.equalsText,
                  ]}
                >
                  {buttonValue}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

// Light Theme Styles
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  themeToggle: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    zIndex: 1,
  },
  themeText: {
    fontSize: 16,
    color: '#00796B',
    fontWeight: 'bold',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    marginTop: 80,
  },
  inputText: {
    color: '#000',
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultText: {
    color: '#00796B',
    fontSize: 40,
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 5,
    padding: 10,
    backgroundColor: '#E0F7FA',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  equalsButton: {
    flex: 2, // Equals button spans two columns
    backgroundColor: '#4FC3F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroButton: {
    flex: 1, // "0" button occupies one box
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
  },
  equalsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// Dark Theme Styles
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  themeToggle: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    zIndex: 1,
  },
  themeText: {
    fontSize: 16,
    color: '#BB86FC',
    fontWeight: 'bold',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    marginTop: 80,
  },
  inputText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultText: {
    color: '#BB86FC',
    fontSize: 40,
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 5,
    padding: 10,
    backgroundColor: '#121212',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  equalsButton: {
    flex: 2, // Equals button spans two columns
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroButton: {
    flex: 1, // "0" button occupies one box
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  equalsText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default App;
