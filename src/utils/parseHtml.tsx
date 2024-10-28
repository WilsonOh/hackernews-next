import parse, {
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";
import { ReactNode } from "react";

export function parseHtml(htmlString?: string): ReactNode {
  if (!htmlString) {
    return null;
  }
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      const node = domNode as Element;
      if (node.type === "tag" && node.name === "a") {
        let href = node.attribs.href;
        const url = new URL(href);
        if (
          url.hostname === "news.ycombinator.com" &&
          url.pathname === "/item"
        ) {
          const id = url.searchParams.get("id");
          if (id) {
            href = `/item/${id}`;
          }
        }
        return (
          <a
            {...node.attribs}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-blue-600 underline visited:text-purple-600 hover:text-blue-800 hover:underline"
            href={href}
          >
            {domToReact(node.children, options)}
          </a>
        );
      }
      if (node.type === "tag" && node.name === "pre") {
        return (
          <pre {...node.attribs} className="overflow-x-auto bg-muted py-2">
            {domToReact(node.children, options)}
          </pre>
        );
      }
    },
  };
  return <div className="w-full">{parse(htmlString, options)}</div>;
}
