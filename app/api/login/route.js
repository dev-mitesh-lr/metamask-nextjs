import User from "@/utils/models/User";
import { SHA256 as sha256 } from "crypto-js";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.NEXT_JWT_KEY);
const alg = "HS256";
const createToken = async (email, userId) => {
  return await new SignJWT({ email, userId, isAdmin: true })
    .setProtectedHeader({ alg })
    .setExpirationTime("48h")
    .sign(secret);
};

export async function POST(request) {
  await connectDB();
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required." });
  }
  try {
    const existingUser = await User.findOne({ email }).lean();

    if (existingUser) {
      let hashedPassword = sha256(password).toString();
      if (hashedPassword !== existingUser.password) {
        return NextResponse.json({
          message: "Email or password does not match.",
        });
      }
      const token = await createToken(existingUser.email, existingUser.id);
      cookies().set("access_token", token);
      delete existingUser.password;
      return NextResponse.json({
        body: { access_token: token, userInfo: existingUser },
        status: 200,
      });
    } else {
      let newUser = await User.create({
        email,
        password: sha256(password).toString(),
        rewardPoints: 100,
      });
      delete newUser.password;
      const token = await createToken(newUser.email, newUser.id);
      cookies().set("access_token", token);
      return NextResponse.json({
        body: { access_token: token, userInfo: newUser },
        status: 200,
      });
    }
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({
      message: "An unexpected error occurred.",
      error: error,
    });
  }
}
