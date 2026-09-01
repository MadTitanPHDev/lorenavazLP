import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
};

export function NavLink({ href, label, onClick, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-block py-1 text-[11px] font-medium uppercase tracking-[0.22em]"
    >
      {label}
      <span
        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-ink transition-transform duration-500 ease-out ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}
