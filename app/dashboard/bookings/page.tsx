import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function BookingsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">My Bookings</h1>
      <div className="py-12 flex flex-col items-center justify-center bg-muted/40 rounded-xl border border-muted-foreground/10">
        <p className="text-lg text-muted-foreground text-center mb-4">
          No bookings yet. Start exploring stays and request your first booking.
        </p>
        <a href="#" className="inline-block rounded-lg bg-primary text-background px-6 py-2 font-medium hover:bg-primary/90 transition">
          Find a Stay
        </a>
      </div>
    </div>
  );
}