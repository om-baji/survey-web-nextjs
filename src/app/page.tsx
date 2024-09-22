"use client"
import CustomInput from "@/components/CustomInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type formInput = z.infer<typeof schema>

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <div className="p-4">
        <h3 className="scroll-m-20  text-4xl font-semibold tracking-tight">
          Welcome to Survey Heaven!
        </h3>
      </div>
      <div className="mt-4">
        <p className="text-xl text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects
          a response.
        </p>
      </div>

    </div>
  );
}
