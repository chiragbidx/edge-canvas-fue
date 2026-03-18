"use client";

export default function ListingsClient() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">My Listings</h1>
      <div className="py-12 flex flex-col items-center justify-center bg-muted/40 rounded-xl border border-muted-foreground/10">
        <p className="text-lg text-muted-foreground text-center mb-4">
          You haven’t listed any spaces yet. Ready to become a host? Create your first listing!
        </p>
        <a href="/dashboard/listings/create" className="inline-block rounded-lg bg-primary text-background px-6 py-2 font-medium hover:bg-primary/90 transition">
          Create Listing
        </a>
      </div>
    </div>
  );
}