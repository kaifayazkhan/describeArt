import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firebase_db } from "@/config/firebase";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          status: 404,
        },
        { status: 404 }
      );
    }

    const userRef = doc(firebase_db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (
      !userDoc.exists() ||
      !user.emailVerified ||
      userDoc.data().email !== email
    ) {
      return NextResponse.json(
        {
          message: "User not found",
          status: 404,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: "Login Successful",
      status: 200,
      data: response,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "User not found",
        error: e.message,
      },
      { status: 500 }
    );
  }
};
