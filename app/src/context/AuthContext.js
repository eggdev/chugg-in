import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createContext,
} from 'react';

const AuthContext = createContext();

function AuthProvider(props) {}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };
