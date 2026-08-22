// useActionState manages state updates based on the result of an asynchronous action function (frequently used with forms). It automatically tracks the pending status, returned data, and submission errors.

// snippet -->
// import { useActionState } from 'react';

// // 1. Define action function: accepts (previousState, formData)
// async function updateProfile(prevState, formData) {
//   const name = formData.get("username");
//   if (!name) return { error: "Name is required" };
//   return { success: true, name };
// }

// function Form() {
//   // 2. Pass action + initial state to hook
//   const [state, formAction, isPending] = useActionState(updateProfile, null);

//   return (
//     <form action={formAction}>
//       <input name="username" />
//       <button disabled={isPending}>{isPending ? 'Saving...' : 'Submit'}</button>
//       {state?.error && <p>{state.error}</p>}
//     </form>
//   );
// }



// IMPLEMENTATION -->
import React, { useActionState } from 'react';

// Mock server function (simulates network delay and validation)
async function updateEmailAction(previousState, formData) {
  const email = formData.get('email');

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Basic validation logic
  if (!email || !email.includes('@')) {
    return {
      status: 'error',
      message: 'Please enter a valid email address.',
    };
  }

  // Success response
  return {
    status: 'success',
    message: `Email updated to ${email} successfully!`,
  };
}

const UseActionState = () => {
  // state: returned payload from action
  // formAction: function passed directly to <form action={...}>
  // isPending: true while the async action function is executing
  const [state, formAction, isPending] = useActionState(updateEmailAction, {
    status: 'idle',
    message: '',
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '350px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Update Email</h3>

      <form action={formAction}>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '4px' }}>New Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@example.com"
            disabled={isPending}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: '8px 16px',
            backgroundColor: isPending ? '#ccc' : '#0066cc',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: isPending ? 'not-allowed' : 'pointer',
          }}
        >
          {isPending ? 'Saving...' : 'Update Email'}
        </button>
      </form>

      {/* Render Feedback Messages */}
      {state?.status === 'error' && (
        <p style={{ color: 'red', marginTop: '12px', fontSize: '14px' }}>
          ❌ {state.message}
        </p>
      )}

      {state?.status === 'success' && (
        <p style={{ color: 'green', marginTop: '12px', fontSize: '14px' }}>
          ✅ {state.message}
        </p>
      )}
    </div>
  );
}


export default UseActionState