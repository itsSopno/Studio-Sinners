"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useData = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      fetch("https://server-1-1-6g3a.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
          name: session.user.name,
          id: session.user.id,
          image: session.user.image,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [session]);
};

export default useData;
