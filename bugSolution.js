```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: passing a function to setTimeout
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}
```