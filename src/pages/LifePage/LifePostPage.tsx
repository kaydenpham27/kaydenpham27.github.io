import { useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import React from "react";
import { BASE_URL } from "@/constants";
import Typography from "@/components/ui/typography";

export const LifePostPage = () => {
  const { contentUri } = useParams();
  const [markdown, setMarkdown] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!contentUri) {
      setError("Missing post");
      setLoading(false);
      return;
    }

    const ac = new AbortController();
    setLoading(true);
    setError(null);
    setMarkdown("");

    fetch(`${BASE_URL}/life/${contentUri}/index.md`, { signal: ac.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load this post (${res.status})`);
        }
        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch((e: unknown) => {
        if (e instanceof Error && e.name === "AbortError") return;
        setError(
          e instanceof Error
            ? e.message
            : "Something went wrong loading this post.",
        );
      })
      .finally(() => {
        if (!ac.signal.aborted) setLoading(false);
      });

    return () => ac.abort();
  }, [contentUri]);

  return (
    <Card>
      <CardContent className="pt-6">
        {loading && (
          <Typography.Muted className="font-thin">Loading…</Typography.Muted>
        )}
        {error && !loading && (
          <Typography.Muted className="font-thin text-red-600">
            {error}
          </Typography.Muted>
        )}
        {!loading && !error && <MarkdownRenderer content={markdown} />}
      </CardContent>
    </Card>
  );
};
