import Link from "next/link";
import { getRelatedPublishedContent } from "@/content/related";

interface RelatedContentProps {
  entryId: string;
  heading?: string;
}

const TYPE_LABELS: Record<string, string> = {
  tool: "Tool",
  pattern: "Pattern",
  method: "Method",
  framework: "Framework",
  "governance-model": "Governance model",
  resource: "Resource",
  "case-study": "Case study",
  template: "Template",
  "design-system-component": "Design system component",
  guidance: "Guidance",
  "landing-page": "Collection",
};

export function RelatedContent({
  entryId,
  heading = "Continue with related resources",
}: RelatedContentProps) {
  const related = getRelatedPublishedContent(entryId);

  if (!related.length) return null;

  return (
    <section className="related-content" aria-labelledby={`${entryId}-related`}>
      <p className="eyebrow">Connected MyKMHub content</p>
      <h2 id={`${entryId}-related`}>{heading}</h2>
      <ul className="design-system-grid related-resource-list">
        {related.map(({ entry, relationshipLabel }) => (
          <li className="design-system-card" key={entry.id}>
            <p className="eyebrow">{TYPE_LABELS[entry.type] ?? entry.type}</p>
            <h3>
              <Link href={entry.route}>{entry.title}</Link>
            </h3>
            <p>{relationshipLabel}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
