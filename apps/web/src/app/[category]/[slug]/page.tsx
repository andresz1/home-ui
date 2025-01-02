import { allDocuments } from "content-collections";
import { MDX } from "@/components/mdx";
import { notFound } from "next/navigation";

export default async function DocumentationPage() {
  const document = allDocuments[0];

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
    category: document.category,
    slug: document.slug,
  }));
}
