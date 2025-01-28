```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting a timeout with a non-function
    let timeoutId = setTimeout(count + 1, 1000); 

    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}
```