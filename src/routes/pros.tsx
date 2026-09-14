import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/marketing/Nav";
import { Footer } from "../components/marketing/Footer";
import { ProsHero } from "../components/marketing/ProsHero";
import { ProsFeatures } from "../components/marketing/ProsFeatures";
import { FoundingPerks } from "../components/marketing/FoundingPerks";
import { ProApplication } from "../components/marketing/ProApplication";

export const Route = createFileRoute("/pros")({
  head: () => ({
    meta: [
      { title: "Ewà for Pros — You're the talent. We bring the clients." },
      {
        name: "description",
        content:
          "Ewà Biz is your mobile storefront: home-service clients, a calendar you fully control, and payouts you can count on. Apply to be a founding pro in NYC.",
      },
    ],
  }),
  component: Pros,
});

function Pros() {
  return (
    <div className="min-h-screen bg-midnight text-creamy">
      <Nav variant="pros" />
      <main>
        <ProsHero />
        <ProsFeatures />
        <FoundingPerks />
        <ProApplication />
      </main>
      <Footer variant="pros" />
    </div>
  );
}
