import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersData from '../data/users.json';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkLoginState = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user session', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginState();
  }, []);

  const login = async (usernameOrEmail, password) => {
    // Basic validation against local JSON
    const foundUser = usersData.find(
      (u) =>
        (u.email.toLowerCase() === usernameOrEmail.toLowerCase() ||
          u.username.toLowerCase() === usernameOrEmail.toLowerCase()) &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      await AsyncStorage.setItem('user', JSON.stringify(foundUser));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
