import { Container } from "./ui";

export default function PageHeader({ number, eyebrow, title, intro }: { number: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <Container className="pb-10 pt-14 md:pb-14 md:pt-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">{number}</span> {eyebrow}
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight md:text-5xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-base text-muted">{intro}</p>}
    </Container>
  );
}
