import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Text, Button } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* App Identifier - Timamu with Brain Icon */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="brain" size={50} color="white" />
        <Text style={styles.appTitle}>Timamu</Text>
      </View>

      {/* Sign Up Form */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        placeholderTextColor="#ccc"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Re-enter your password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Sign Up Button */}
      <Button
        mode="contained"
        style={styles.signupButton}
        onPress={() => navigation.replace("Login")}
      >
        Sign Up
      </Button>

      {/* Already Have an Account? */}
      <View style={styles.options}>
        <Text style={styles.optionText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.optionLink}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* OR Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Social Sign Up Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#DB4437" }]}
        >
          <FontAwesome name="google" size={20} color="white" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#1877F2" }]}
        >
          <FontAwesome name="facebook" size={20} color="white" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 32,
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  label: {
    alignSelf: "flex-start",
    color: "white",
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: "#50C878",
    padding: 12,
    width: "100%",
    borderRadius: 8,
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  optionText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  optionLink: {
    color: "#FFDD57",
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    marginLeft: 5,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  orText: {
    color: "white",
    marginHorizontal: 10,
    fontFamily: "Montserrat_400Regular",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  socialText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
});
