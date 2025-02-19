The solution involves enhancing logging within the Expo build process to provide more detailed information about the execution stages. If the process hangs, the logs may offer clues on the point of failure.  Adding comprehensive error handling within custom build scripts can also help identify and address unexpected exceptions.

```javascript
// buildSolution.js
// ... existing Expo build script ...

//Enhanced Logging
expo build:android -v --log-level debug 

//Error Handling within custom scripts (if any)
try{
  //your expo build script
} catch(error){
  console.error("Error during build:", error)
  process.exit(1)
}
```

The `-v` flag increases verbosity, and `--log-level debug` provides more detailed logs.  Proper error handling within custom build scripts is crucial to identify unexpected situations.