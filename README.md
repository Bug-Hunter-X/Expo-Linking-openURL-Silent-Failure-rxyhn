# Expo Linking.openURL Silent Failure

This repository demonstrates a common, yet subtle issue with Expo's `Linking.openURL` API.  The problem lies in the lack of explicit error handling when the URL fails to open. This can lead to difficult-to-debug scenarios, where the application appears to function normally, but the intended URL opening never occurs.

The `bug.js` file showcases the problem. The `bugSolution.js` file provides a solution to handle potential errors more robustly.