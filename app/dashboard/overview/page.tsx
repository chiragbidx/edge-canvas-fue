import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function OverviewPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
      <p className="text-muted-foreground">
        See your latest activities, upcoming bookings, and listing stats at a glance.
      </p>
      <div className="py-16 flex flex-col items-center justify-center bg-muted/40 rounded-xl border border-muted-foreground/10">
        <p className="text-lg text-muted-foreground text-center mb-4">
          No recent activity yet. Book a stay or create a listing to get started.
        </p>
        <div className="flex gap-4">
          <a href="/dashboard/listings" className="inline-block rounded-lg bg-primary text-background px-6 py-2 font-medium hover:bg-primary/90 transition">Create Listing</a>
          <a href="#" className="inline-block rounded-lg bg-muted px-6 py-2 font-medium hover:bg-muted/80 border hover:border-primary transition">Explore Stays</a>
        </div>
      </div>
    </div>
  );
}