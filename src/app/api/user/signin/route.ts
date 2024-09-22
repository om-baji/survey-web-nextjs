import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../../../config";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        email: true,
        password: true,
      },
    });

    // console.log(user);

    if (!user) return NextResponse.json({ message: "User does not exist!" });

    const isValid = await bcrypt.compare(password, user?.password);

    if (!isValid) return NextResponse.json({ message: "Wrong password!" });

    const token = jwt.sign({ id: email }, JWT_SECRET);

    return NextResponse.json({
      token,
    });
  } catch (e) {
    return NextResponse.json({
      message: "Something went wrong!",
      error: e,
    });
  }
}
