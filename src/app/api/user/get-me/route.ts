import { NextRequest, NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { firebase_db } from "@/config/firebase";

export const GET = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        {
          message: "User not found ",
          status: 404,
        },
        { status: 404 }
      );
    }
    const userRef = doc(firebase_db, "users", id);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return NextResponse.json(
        {
          message: "User not found ",
          status: 404,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "User found",
        status: 200,
        data: userDoc.data(),
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: e.message,
      },
      { status: 500 }
    );
  }
};
