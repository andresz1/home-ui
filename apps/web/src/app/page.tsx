import { Button } from "@adv-re/ui/button";
import { allDocuments } from "content-collections";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {allDocuments.map((document) => (
        <Link
          key={document.slug}
          href={`/docs/${document.category}/${document.slug}`}
        >
          {document.title}
        </Link>
      ))}
      <Button>re</Button>
    </div>
  );
}
