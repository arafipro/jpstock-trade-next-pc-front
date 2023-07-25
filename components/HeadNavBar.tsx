"use client";

import CodeForm from "./forms/CodeForm";

export default function HeadNavBar() {
  const onSubmit = async (data: Code) => {
    console.log(data);
  };
  return (
    <div className="fixed bg-white h-16 w-full z-0 items-center">
      <CodeForm onSubmit={onSubmit} />
    </div>
  );
}
