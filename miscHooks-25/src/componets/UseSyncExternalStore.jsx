// useSyncExternalStore subscribes to external non-React state stores (like browser APIs, Redux, or custom stores outside the React tree) while preventing UI "tearing" during concurrent rendering.

// snippet -
// import { useSyncExternalStore } from 'react';

// function ScreenWidth() {
//   // Subscribe to window resize events safely
//   const width = useSyncExternalStore(
//     // 1. Subscribe function: receives callback to notify React when state changes
//     (callback) => {
//       window.addEventListener('resize', callback);
//       return () => window.removeEventListener('resize', callback);
//     },
//     // 2. Get client snapshot
//     () => window.innerWidth,
//     // 3. Get server snapshot (Optional, used for SSR)
//     () => 1024
//   );

//   return <p>Window Width: {width}px</p>;
// }


// implementation

import React, { useSyncExternalStore } from 'react';

// ==========================================
// 1. CREATE AN EXTERNAL STORE (Outside React)
// ==========================================
function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    // Return current snapshot
    getState: () => state,

    // Update state and notify all React components
    setState: (fn) => {
      state = typeof fn === 'function' ? fn(state) : fn;
      listeners.forEach((listener) => listener());
    },

    // Subscribe to changes (returns unsubscribe cleanup function)
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

// Instantiate global store
const cartStore = createStore({ itemsCount: 0, userRole: 'Guest' });

// ==========================================
// 2. REACT COMPONENTS USING THE STORE
// ==========================================

// Component A: Navbar Counter
function Navbar() {
  // Extract specific state snapshot via useSyncExternalStore
  const itemsCount = useSyncExternalStore(
    cartStore.subscribe,
    () => cartStore.getState().itemsCount
  );

  return (
    <nav style={{ padding: '12px', background: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
      <strong>My Store</strong>
      <span>🛒 Cart Items: {itemsCount}</span>
    </nav>
  );
}

// Component B: Product Actions
function ProductPage() {
  const addToCart = () => {
    cartStore.setState((prev) => ({ ...prev, itemsCount: prev.itemsCount + 1 }));
  };

  const clearCart = () => {
    cartStore.setState((prev) => ({ ...prev, itemsCount: 0 }));
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>Product: Wireless Headphones</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

// Main App Container
const UseSyncExternalStore = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <Navbar />
      <ProductPage />
    </div>
  );
}

export default UseSyncExternalStore