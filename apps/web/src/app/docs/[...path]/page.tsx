import { allDocuments } from "content-collections";
import { MDX } from "@/components/mdx";
import { notFound } from "next/navigation";

interface DocumentationPageProps {
  params: Promise<{ path: Array<string> }>;
}

export default async function DocumentationPage({
  params,
}: DocumentationPageProps) {
  const { path } = await params;

  const [name] = [...path].reverse();

  const document = allDocuments.find((document) => {
    const [current] = document._meta.path.split("/").reverse();
    return name === current;
  });

  if (!document) {
    notFound();
  }

  return (
    <div>
      <MDX
        options={{ scope: { examples: document.examples } }}
        source={document.content}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return allDocuments.map((document) => ({
    path: [document.category, document.slug],
  }));
}
