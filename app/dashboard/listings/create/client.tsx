"use client";

export default function CreateListingClient() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Create New Listing</h1>
      <p className="text-muted-foreground">
        Start sharing your space with guests. Enter details to create your first StayNest listing.
      </p>
      <div className="py-12 flex flex-col items-center justify-center bg-muted/40 rounded-xl border border-muted-foreground/10">
        <form className="space-y-4 w-full max-w-md mx-auto">
          <input 
            type="text" 
            name="listingTitle" 
            className="w-full border px-3 py-2 rounded placeholder:text-muted-foreground bg-background" 
            placeholder="Listing Title" 
            required 
            disabled 
          />
          <textarea
            name="listingDescription"
            className="w-full border px-3 py-2 rounded placeholder:text-muted-foreground bg-background"
            placeholder="Describe your space..."
            rows={4}
            required
            disabled
          ></textarea>
          <button
            type="button"
            className="w-full rounded-lg bg-primary text-background px-6 py-2 font-medium hover:bg-primary/90 transition opacity-50 cursor-not-allowed"
            disabled
          >
            Save Listing (Coming Soon)
          </button>
        </form>
      </div>
    </div>
  );
}