import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { FormInput } from '../../components/Input/FormInput';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import { ErrorText } from '../../components/ErrorText/ErrorText';
import { useAuth } from '../../hooks/useAuth';
import { styles } from './styles';

export const LoginScreen = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please enter both username/email and password');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(async () => {
      const result = await login(username, password);
      if (!result.success) {
        setError(result.message);
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.formContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>HealthBridge</Text>
          <Text style={styles.subtitle}>Sign in to book appointments with top doctors</Text>
        </View>

        <ErrorText>{error}</ErrorText>

        <FormInput
          label="Username or Email"
          placeholder="Enter your username or email"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <FormInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title={isLoading ? 'Signing In...' : 'Sign In'} 
            onPress={handleLogin} 
            disabled={isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
