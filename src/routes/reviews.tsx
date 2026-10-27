import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Reveal";
import { Comments } from "@/components/site/Comments";
import { CtaBand } from "@/components/site/CtaBand";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: seo("Reviews & Comments | Sawaa Enterprises", "Read what clients and visitors from around the world say about Sawaa Enterprises — and leave your own live comment.") }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero eyebrow="Reviews" title={<>What people <span className="text-gradient">say about us.</span></>} text="Every comment is saved and shown live to visitors everywhere." />
      <section className="mx-auto max-w-7xl px-6"><Comments /></section>
      <CtaBand />
    </>
  );
}
