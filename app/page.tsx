"use client";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const supabase = createClient(
  "https://sjgklysexibojolffqvh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZ2tseXNleGlib2pvbGZmcXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4ODA1NjIsImV4cCI6MjAwMTQ1NjU2Mn0.hdTuIKkIFVcO7j2zZUm8Fe2iYgKLIOwq9io92o5NeD4"
);

export default function Home() {
  const router = useRouter();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // Go to the home page
      router.push("/home");
    } else {
      // Go to the login page
      router.push("/");
    }
  });

  return (
    <div className={poppins.className}>
      <div className="flex absolute w-screen h-screen">
        <div className="w-[50%] flex flex-col items-end justify-center gap-[60px]">
          <div className=" w-[500px] h-[500px] rounded-full bg-pink-500"></div>
          <div className=" w-[500px] h-[500px] rounded-full bg-blue-500"></div>
        </div>
        <div className="w-[50%] flex flex-col items-start justify-center gap-[60px]">
          <div className=" w-[500px] h-[500px] rounded-full bg-red-800"></div>
          <div className=" w-[500px] h-[500px] rounded-full bg-orange-500"></div>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-screen bg-white backdrop-blur-3xl bg-opacity-[50%]">
        <div className=" bg-white px-8 py-7 flex flex-col justify-center shadow-2xl w-[400px] h-[600px] rounded-tl-[20px] rounded-bl-[20px]">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    inputLabelText: "black",
                    inputBorder: "black",
                    inputBorderHover: "black",
                    inputBorderFocus: "black",
                    defaultButtonBorder: "black",
                    defaultButtonText: "black",
                  },
                  borderWidths: {
                    buttonBorderWidth: "1px",
                    inputBorderWidth: "1px",
                  },
                  radii: {
                    borderRadiusButton: "6px",
                    buttonBorderRadius: "6px",
                    inputBorderRadius: "6px",
                  },
                },
              },
            }}
            theme="default"
            providers={["github", "google"]}
          />
        </div>
        <div>
          <Image
            className="shadow-2xl rounded-tr-[20px] rounded-br-[20px]"
            src={"/erdd.png"}
            alt="logo-image"
            width={400}
            height={200}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
}
