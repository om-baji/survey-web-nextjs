import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../../../config";

const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const hashPass = await bcrypt.hash(password, 10);

    const response = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPass,
      },
    });

    const token = jwt.sign({ id: email }, JWT_SECRET);

    return NextResponse.json({
      message: "User created succesfully",
      token,
    });
  } catch (e) {
      return NextResponse.json({
        message: "Something went wrong!",
        error: e,
      });
  }
}
