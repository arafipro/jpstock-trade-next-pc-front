"use client";

import CompanyForm from "@/components/forms/CompanyForm";
import { addCompany } from "@/lib/companyApi";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onSubmit = async (data: Company) => {
    await addCompany({
      company_id: data.company_id,
      company: data.company,
    });
    router.push("/company");
  };
  return (
    <div className="p-8 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">証券会社登録</h1>
      <CompanyForm onSubmit={onSubmit} onCreate={true} />
    </div>
  );
}
