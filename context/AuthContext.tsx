// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "@/lib/appwrite";
import { Models } from "appwrite";
import { ActivityIndicator, Text, View } from "react-native";

type AuthContextType = {
  user: Models.User<Models.Preferences> | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const { success, user } = await getUser();
      if (success) {
        if (user) {
          setUser(user);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#007AFF" />
        <Text className="mt-3 text-base font-medium text-gray-700">Checking session...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
