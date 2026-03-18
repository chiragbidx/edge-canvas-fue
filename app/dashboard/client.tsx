"use client";

export default function Client({ greeting, firstName }: { greeting: string; firstName: string }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 pt-4">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tight">{greeting}</h1>
        <p className="text-muted-foreground">
          Manage your stays, bookings, and listings all in one place.
        </p>
      </div>
      <div className="py-16 flex flex-col items-center justify-center bg-muted/40 rounded-xl border border-muted-foreground/10">
        <p className="text-xl font-medium text-muted-foreground text-center mb-4">
          Start exploring spaces or list your own to begin earning.
        </p>
        <div className="flex gap-4">
          <a href="/dashboard/listings/create" className="inline-block rounded-lg bg-primary text-background px-6 py-2 font-medium hover:bg-primary/90 transition">
            Create Listing
          </a>
          <a href="#" className="inline-block rounded-lg bg-muted px-6 py-2 font-medium hover:bg-muted/80 border hover:border-primary transition">
            Find a Stay
          </a>
        </div>
      </div>
    </div>
  );
}