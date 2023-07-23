import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "langchain/text_splitter";

export default async function page() {
  const loader = new PDFLoader("data/pg.pdf", {
    splitPages: false,
  });
  const res_pdf = await loader.load();
  const str = res_pdf[0].pageContent.replace(/\n/g, " ").replace(/,/g, "");
  const splitter = new CharacterTextSplitter({
    separator: " ",
    chunkSize: 1536,
    chunkOverlap: 24,
  });
  const output = await splitter.createDocuments([str]);
  return (
    <main>
      <h1 className="text-center text-3xl">langchain</h1>
      <p className="mt-4 mx-4">{str}</p>
    </main>
  );
}
