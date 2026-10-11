// Latest posts from Medium (public RSS). Refreshed at most every 6 hours.
// If the feed can't be read, the page simply shows the profile links.

export type Post = { title: string; url: string; date: string };

function pick(xml: string, tag: string) {
  const m = xml.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return m ? m[1].trim() : "";
}

export async function getMediumPosts(user: string, limit = 3): Promise<Post[]> {
  try {
    const res = await fetch(`https://medium.com/feed/@${user}`, { next: { revalidate: 6 * 60 * 60 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return xml
      .split("<item>")
      .slice(1, limit + 1)
      .map((item) => ({
        title: pick(item, "title"),
        url: pick(item, "link").split("?")[0],
        date: pick(item, "pubDate"),
      }))
      .filter((p) => p.title && p.url.startsWith("https://"));
  } catch {
    return [];
  }
}
