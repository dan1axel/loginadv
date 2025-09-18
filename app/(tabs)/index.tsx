
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    
    <View style={styles.view}>
      <Text>Get Started</Text>
      <Link href="/login" style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Link>
      <Link href="/signup" style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#550",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#000000",
    borderRadius: 5,
  },
  buttonText: {
    color: "white", 
    fontSize: 16,
    fontWeight: "bold",
  },
});