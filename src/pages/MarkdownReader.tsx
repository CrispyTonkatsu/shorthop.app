import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const markdownFiles = import.meta.glob('../content/**/*.md', { query: '?raw', eager: true }) as Record<string, string | { default: string }>;

// TODO: Split the display from the loading that way we can have both components be reusable

export default function MarkdownReader() {
  const { type, file } = useParams();

  const filePath = `../content/${type}/${file}.md`;

  // TODO: Left off here: Implement async loading for smaller bundle sizes

  const rawModule = markdownFiles[filePath];

  const content = typeof rawModule === 'string'
    ? rawModule
    : rawModule?.default || "404 - Post not found";

  return (
    <div className="prose max-w-none bg-base-100/80 p-8">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
