import Seo from "@/components/Seo";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Terms of Service"
        description="VIVIFY Terms of Service."
        path="/terms"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            This page will be updated with VIVIFY&apos;s Terms of Service. For questions in the meantime, please use the Contact button to email us.
          </p>
        </div>
      </section>
    </div>
  );
}


