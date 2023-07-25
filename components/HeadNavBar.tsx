"use client";

import { useRouter } from "next/navigation";
import CodeForm from "./forms/CodeForm";

export default function HeadNavBar() {
  const router = useRouter();
  const onSubmit = async (data: Code) => {
    router.push(`/tradelist/${data.code}`);
  };
  return (
    <div className="fixed bg-white h-16 w-full z-0 items-center">
      <CodeForm onSubmit={onSubmit} />
    </div>
  );
}
