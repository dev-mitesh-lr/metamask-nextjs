import connectDB from "@/lib/mongodb";
import User from "@/utils/models/User";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await connectDB();
  try {
    const { id } = params;
    console.log("id: ", id);
    let userData = await User.findOne({ _id: id }, { password: 0 }).exec();
    return NextResponse.json({
      body: userData,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "An unexpected error occurred.",
      error: error,
    });
  }
}
