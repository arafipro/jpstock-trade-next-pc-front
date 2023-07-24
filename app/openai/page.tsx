import { loadQAStuffChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

export default async function page() {
  // PDFファイルの各ページに1つのドキュメントが作成
  const loader = new PDFLoader("data/FY22Q4_Tanshin_J.pdf");
  // loadメソッドで変数res_pdfに配列で格納
  const res_pdf = await loader.load();
  // PDFファイルの1ページ目のドキュメントを整形
  const str = res_pdf[0].pageContent.replace(/\n/g, " ").replace(/,/g, "");
  // GPT-3.5を呼び出し
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
  });
  const chain = loadQAStuffChain(model);
  const question = "会社名は何ですか？";
  const res = await chain.call({
    input_documents: str,
    question,
  });
  return (
    <main>
      <h1 className="text-center text-3xl">langchain</h1>
      <p className="mt-4 mx-4">{res.text}</p>
    </main>
  );
}
