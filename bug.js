```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // This will lead to memory leaks and unexpected behavior
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```