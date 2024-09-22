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
  const form = useForm<formInput>({
    resolver: zodResolver(schema)
  })
  const { register, handleSubmit, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r,2000))
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex h-[450px] bg-white shadow-lg rounded-lg overflow-hidden min-w-[450px] max-w-[1000px]">
        <Card className="flex-1 border-r border-gray-300 min-w-[450px]">
          <CardHeader className="text-xl mt-4 text-center">
            <CardTitle>Survey Heaven, Sign In</CardTitle>
            <CardDescription>The best platform to conduct surveys</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                placeholder="example@xyz.com"
                register={register}
                type="text"
                name="email"
                label="Email"
              />

              {errors.email?.message && (
                <p className="text-sm text-muted-foreground text-red-500 p-1 font-semibold">{errors.email.message}</p>
              )}

              <CustomInput
                placeholder="someone@123"
                register={register}
                type="password"
                name="password"
                label="Password"
              />

              {errors.password?.message && (
                <p className="text-sm text-muted-foreground text-red-500 p-1 font-semibold">{errors.password.message}</p>
              )}

              <Button disabled={isSubmitting} className="mt-6 w-full" type="submit">
                {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                <CardFooter>
                  {errors.root && (
                    <p className="text-sm text-muted-foreground text-red-500 p-1 font-semibold">{errors.root.message}</p>
                  )}
                </CardFooter>
              
            </form>
          </CardContent>

        </Card>

        <div className="flex flex-col items-center justify-center bg-slate-300 ">
          <div className="p-4 text-black">
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
              "Unlock insights and enhance offerings through the power of surveys"
            </h4>
            <p className="text-sm text-muted-foreground text-center p-2">
              Revealing insights, understanding preferences, and making informed decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
