"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/dashboard/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-sm"
        >
          <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="" width={40} height={40} />
            Pavan School
          </h1>
          <h2 className="text-gray-600 text-lg text-center">
            Faça login na sua conta
          </h2>
          <Clerk.GlobalError className="text-sm text-red-500" />
          <Clerk.Field name="identifier" className="flex flex-col gap-2">
            <Clerk.Label className="text-sm text-gray-700">
              Nome de usuário
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-4 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <Clerk.FieldError className="text-xs text-red-500" />
          </Clerk.Field>
          <Clerk.Field name="password" className="flex flex-col gap-2">
            <Clerk.Label className="text-sm text-gray-700">Senha</Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-4 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <Clerk.FieldError className="text-xs text-red-500" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-600 text-white rounded-md text-lg p-4 hover:bg-blue-700 transition duration-200"
          >
            Entrar
          </SignIn.Action>
          <p className="text-center text-sm text-gray-500">
            Não tem uma conta?{" "}
            <a href="/sign-up" className="text-blue-600">
              Crie uma aqui
            </a>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
