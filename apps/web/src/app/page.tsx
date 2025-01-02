import { Button } from "@adv-re/ui/button";
import { allDocuments } from "content-collections";
import Link from "next/link";

export default function Home() {
  console.log("xd", allDocuments);

  return (
    <div>
      {allDocuments.map((document) => (
        <Link
          key={document.slug}
          href={`/${document.category}/${document.slug}`}
        >
          {document.title}
        </Link>
      ))}
      <Button>re</Button>
    </div>
  );
}
