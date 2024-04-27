import Link from "next/link";
import React from "react";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const getUniversities = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/universities", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch universities");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function UniversityList() {
  const { university } = await getUniversities();

  return (
    <>
      {university.map((u: { _id: Key | null | undefined; university_name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
        <div
          key={u._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{u.university_name}</h2>
          </div>

        </div>
      ))}
    </>
  );
}