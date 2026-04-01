"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-3 flex gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@example.com"
        className="min-w-0 flex-1 rounded-full border border-outline-variant bg-white px-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
      />
      <button
        type="submit"
        className="cta-gradient rounded-full px-5 py-2 text-sm font-semibold text-white"
      >
        Join
      </button>
    </form>
  );
}
