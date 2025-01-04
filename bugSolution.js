// bugSolution.js
import * as Linking from 'expo-linking';

async function openUrlAsync(url) {
  try {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    } else {
      console.error(`Could not open URL: ${url}`);
      // Handle the case where the URL cannot be opened
      // Consider showing an error message to the user
    }
  } catch (error) {
    console.error('Error opening URL:', error);
    // Handle any other errors that might occur
  }
}

export default openUrlAsync;