import Image from "next/image";

// School logo on a white tile so it reads in both light and dark themes.
export default function SchoolLogo({ src, name, size = 44 }: { src?: string; name: string; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white p-1.5"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={`${name} logo`} width={size - 12} height={size - 12} className="h-full w-full object-contain" />
      ) : (
        <span className="font-display text-sm text-accent">{name.slice(0, 2)}</span>
      )}
    </span>
  );
}
