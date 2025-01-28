# React useEffect Timeout Bug: Non-function callback

This repository demonstrates a common error in React's `useEffect` hook: passing a non-function as the second argument to `setTimeout`.

The `bug.js` file shows the incorrect implementation. The `useEffect` hook attempts to increment the count using `setTimeout`, but it passes the current count value (a number) instead of a function.

The `bugSolution.js` file provides the corrected version which demonstrates proper usage of `setTimeout` within the `useEffect` hook. A function is passed as the second argument, ensuring the count is updated correctly.

## How to reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe that the incorrect implementation in `bug.js` does not update the count.
6. Refer to `bugSolution.js` for the corrected approach which shows that the count updates correctly.