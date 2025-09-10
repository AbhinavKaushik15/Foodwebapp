"use client";
import { auth, fireDb } from "@/lib/firestore/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  saveUserToFirestore: (user: any) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });
    return () => unSub();
  }, []);

  const saveUserToFirestore = async (
    user: User,
    isNewUser: boolean = false
  ): Promise<void> => {
    if (!user) return;

    try {
      const userRef = doc(fireDb, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists() || isNewUser) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "No Name",
          email: user.email,
          photoURL: user.photoURL || null,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        });
      } else {
        console.log("User already exists, skipping save...");
      }
    } catch (error: any) {
      console.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, saveUserToFirestore }}>
      {children}
    </AuthContext.Provider>
  );
};
