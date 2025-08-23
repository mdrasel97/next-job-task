"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [providers, setProviders] = useState({});

  // Load providers (Google)
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  // Credentials login
  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res.error) {
      console.log("Login successful!");
      router.push("/products");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 border border-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              className="w-full px-3 py-2 border dark:border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              type="password"
              className="w-full px-3 py-2 border dark:border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Login */}
        {providers &&
          Object.values(providers)
            .filter((provider) => provider.id === "google")
            .map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id)}
                  className="w-full py-2 border border-primary text-primary font-semibold rounded-lg transition"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
