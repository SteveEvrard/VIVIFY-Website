import Seo from "@/components/Seo";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Privacy Policy"
        description="VIVIFY Privacy Policy."
        path="/privacy"
      />
      <section className="bg-white py-16 md:py-24" aria-labelledby="privacy-title">
        <div className="container">
          <h1 id="privacy-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            This page will be updated with VIVIFY&apos;s Privacy Policy. For questions in the meantime, please use the Contact button to email us.
          </p>
        </div>
      </section>
    </div>
  );
}


