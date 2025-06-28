import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f4f8",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#1f2937",
          textAlign: "center",
        }}
      >
        🚀 Welcome to My App!
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#4b5563",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        This is your beautiful new Expo starter home. Edit{" "}
        <Text style={{ fontWeight: "bold" }}>app/index.tsx</Text> to customize
        it.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#3b82f6",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
        onPress={() => {
          alert("Let’s build something awesome! 🚀");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
