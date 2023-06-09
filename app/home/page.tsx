"use client";
import React from "react";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useValuesStore } from "../store/valuesStore";
import { shallow } from "zustand/shallow";
import { Poppins } from "next/font/google";
import SpaceBox from "../components/SpaceBox";
import DayBox from "../components/DayBox";
import WatchBox from "../components/WatchBox";
import SoundBox from "../components/SoundBox";
import Background from "../components/Background";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const supabase = createClient(
  "https://sjgklysexibojolffqvh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZ2tseXNleGlib2pvbGZmcXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4ODA1NjIsImV4cCI6MjAwMTQ1NjU2Mn0.hdTuIKkIFVcO7j2zZUm8Fe2iYgKLIOwq9io92o5NeD4"
);

function page() {
  const { user, setUser } = useValuesStore(
    (state) => ({
      user: state.user,
      setUser: state.setUser,
    }),
    shallow
  );

  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
          console.log(user);
        }
      });
    }

    getUserData();
  }, []);

  async function signOutUser() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <div className={poppins.className}>
      <div className="bg-[#2C2C2C] h-screen flex justify-center items-center">
        <Background />
        {Object.keys(user).length !== 0 ? (
          <div className="relative backdrop-blur-3xl h-full p-5 w-full">
            <div className="h-full flex gap-5">
              <SpaceBox />
              <div className="h-full w-[70%] flex flex-col gap-5">
                <div className="h-1/2 flex gap-5">
                  <DayBox />
                  <WatchBox />
                </div>
                <SoundBox />
              </div>
            </div>
          </div>
        ) : (
          <h1>You are not logged in</h1>
        )}
      </div>
    </div>
  );
}

export default page;
