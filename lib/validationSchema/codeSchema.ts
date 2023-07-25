import { z } from "zod";

export const codeSchema = z.object({
  // code: z.string().nonempty("1301から9997の範囲を入力してください"),
  code: z
    .number({
      invalid_type_error: "1301から9997の範囲を入力してください",
    })
    .int()
    .min(1301, { message: "1301以上に数値を入力してください" })
    .max(9997, { message: "9997以下に数値を入力してください" }),
});
