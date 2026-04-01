import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "outline";
  arrow?: boolean;
}

export default function CTAButton({
  children,
  href,
  className = "",
  variant = "primary",
  arrow = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

  const variants = {
    primary: "cta-gradient text-white shadow-md",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && (
        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
          arrow_forward
        </span>
      )}
    </Link>
  );
}
