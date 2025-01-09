import { allDocuments } from "content-collections";
import { MDX } from "@/components/mdx/mdx";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { LayoutSideNav } from "@/components/layout/layout-side-nav";
import { LayoutNav } from "@/components/layout/layout-nav";
import { DocsTableOfContent } from "@/components/docs/docs-table-of-content";
import { DocsFooter } from "@/components/docs/docs-footer";

interface DocumentationPageProps {
  params: Promise<{ path: Array<string> }>;
}

export default async function DocumentationPage({
  params,
}: DocumentationPageProps) {
  const { path } = await params;

  const index = allDocuments.findIndex((document) => {
    return document._meta.path === path.join("/");
  });

  if (index < 0) {
    notFound();
  }

  const document = allDocuments[index];
  const previous = index - 1 >= 0 ? allDocuments[index - 1] : undefined;
  const next =
    index + 1 < allDocuments.length ? allDocuments[index + 1] : undefined;

  return (
    <Container className="flex min-h-[calc(100dvh-var(--sz-64))] w-full">
      <LayoutSideNav>
        <LayoutNav />
      </LayoutSideNav>

      <main className="flex w-full flex-row">
        <article className="flex w-full flex-col">
          <div className="flex w-full grow flex-row gap-lg">
            <div className="relative flex min-w-0 flex-1 flex-col md:pl-lg mt-lg">
              <MDX
                options={{
                  scope: {
                    examples: document.examples,
                    docgen: document.docgen,
                  },
                }}
                source={document.content}
              />

              <DocsFooter previous={previous} next={next} />
            </div>

            <DocsTableOfContent headings={document.headings || []} />
          </div>
        </article>
      </main>
    </Container>
  );
}

export async function generateStaticParams() {
  return allDocuments.map((document) => ({
    path: document.slugAsParams,
  }));
}
