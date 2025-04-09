import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-red-200">Edit app/index.tsx to edit this screen.</Text>

        <Link href="/signIn">
            Sign In
        </Link>

        <Link href="/explore">
            Explore
        </Link>

        <Link href="/profile">
            Profile
        </Link>

        <Link href="/property/1">Property</Link>

    </View>
  );
}
