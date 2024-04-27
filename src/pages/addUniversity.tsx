"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUniversity() {
  const [university_name, setUniversityName] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!university_name) {
      alert("Title is required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/universities", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ university_name }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setUniversityName(e.target.value)}
        value={university_name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="University Name"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add University
      </button>
    </form>
  );
}