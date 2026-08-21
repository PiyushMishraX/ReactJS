// useImperativeHandle -- 
// useImperativeHandle modifies or limits the ref handle that a parent component receives when using forwardRef. Instead of giving the parent access to the full DOM node, it exposes only the custom methods you explicitly define.


// code snippet -
// import { useRef, useImperativeHandle, forwardRef } from 'react';

// const CustomInput = forwardRef((props, ref) => {
//   const inputRef = useRef(null);

//   // Expose specific methods to parent's ref
//   useImperativeHandle(ref, () => ({
//     focusInput: () => inputRef.current.focus(),
//     clearInput: () => { inputRef.current.value = ''; }
//   }), []);

//   return <input ref={inputRef} />;
// });



import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

// Child Component: Controls its own state and exposes imperative methods
const ConfirmModal = forwardRef(({ onConfirm }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define what the parent receives via ref
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }), []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', width: '300px' }}>
        <h3>Are you sure?</h3>
        <p>This action cannot be undone.</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button 
            style={{ background: '#e53e3e', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px' }}
            onClick={() => {
              onConfirm();
              setIsOpen(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
});


const App = () => {
  const modalRef = useRef(null);

  const handleDelete = () => {
    // Parent triggers child method imperatively via ref
    if (modalRef.current) {
      modalRef.current.open();
    }
  };

  const handleConfirmDelete = () => {
    alert('Item deleted successfully!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Account Settings</h2>
      <button 
        onClick={handleDelete}
        style={{ background: '#e53e3e', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px' }}
      >
        Delete Account
      </button>

      {/* Pass ref to Child Component */}
      <ConfirmModal ref={modalRef} onConfirm={handleConfirmDelete} />
    </div>
  );
}

export default App