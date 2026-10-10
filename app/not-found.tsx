import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-display text-8xl text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl">This page didn&rsquo;t germinate.</h1>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </Container>
  );
}
