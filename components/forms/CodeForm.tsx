import { codeSchema } from "@/lib/validationSchema/codeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function CodeForm(props: CodeProps) {
  const { code, onSubmit, onTrade } = props;
  const {
    register,
    handleSubmit,
  } = useForm<Code>({
    mode: "onChange",
    resolver: zodResolver(codeSchema),
	});
  return (
    <div className={`h-16 ml-80 ${onTrade ? "hidden" : ""}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center h-full">
        <label className="font-semibold text-sm text-gray-600 block">
          証券コード
        </label>
        <input
          type="number"
          id="code"
          {...register("code", { valueAsNumber: true })}
          min={1301}
          max={9997}
          className="border rounded-lg p-2 text-sm w-24 mx-4"
        />
        <button
          type="submit"
          className="p-2 w-16 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          検索
        </button>
      </form>
    </div>
  );
}
