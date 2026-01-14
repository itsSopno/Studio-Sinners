"use client";

import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

// Initial state
const initialState = {
  cart: [],
  user: null,
  searchQuery: '',
  selectedCategory: 'all',
  wishlist: []
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };

    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };

    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('creative-store-cart');
    const savedWishlist = localStorage.getItem('creative-store-wishlist');
    
    if (savedCart) {
      const cartItems = JSON.parse(savedCart);
      cartItems.forEach(item => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      });
    }
    
    if (savedWishlist) {
      const wishlistItems = JSON.parse(savedWishlist);
      wishlistItems.forEach(item => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
      });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('creative-store-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('creative-store-wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const value = {
    ...state,
    dispatch,
    // Helper functions
    addToCart: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),
    removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }),
    updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    addToWishlist: (item) => dispatch({ type: 'ADD_TO_WISHLIST', payload: item }),
    removeFromWishlist: (id) => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id }),
    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    setSearchQuery: (query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query }),
    setSelectedCategory: (category) => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category }),
    // Computed values
    cartTotal: state.cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    cartItemsCount: state.cart.reduce((total, item) => total + item.quantity, 0),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}