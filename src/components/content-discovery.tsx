"use client";

import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { SearchField } from "@react-spectrum/s2/SearchField";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ContentType } from "@/content/types";

interface DiscoverableEntry {
  id: string;
  title: string;
  summary: string;
  type: ContentType;
  domains: string[];
  tags: string[];
  route: `/${string}` | "/";
}

interface ContentDiscoveryProps {
  entries: DiscoverableEntry[];
}

const TYPE_LABELS: Partial<Record<ContentType, string>> = {
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
};

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

export function ContentDiscovery({ entries }: ContentDiscoveryProps) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [domain, setDomain] = useState("all");

  const types = useMemo(
    () => [...new Set(entries.map((entry) => entry.type))].sort(),
    [entries],
  );
  const domains = useMemo(
    () => [...new Set(entries.flatMap((entry) => entry.domains))].sort(),
    [entries],
  );

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return entries.filter((entry) => {
      const matchesQuery =
        !normalizedQuery ||
        [
          entry.title,
          entry.summary,
          ...entry.domains,
          ...entry.tags,
        ].some((value) =>
          value.toLocaleLowerCase().includes(normalizedQuery),
        );
      const matchesType = type === "all" || entry.type === type;
      const matchesDomain =
        domain === "all" || entry.domains.includes(domain);

      return matchesQuery && matchesType && matchesDomain;
    });
  }, [domain, entries, query, type]);

  return (
    <div className="content-discovery">
      <div className="discovery-controls">
        <SearchField
          label="Search resources"
          value={query}
          onChange={setQuery}
          description="Search titles, summaries, domains, and tags."
        />
        <Picker
          label="Content type"
          selectedKey={type}
          onSelectionChange={(key) => setType(String(key))}
        >
          <PickerItem id="all">All types</PickerItem>
          {types.map((entryType) => (
            <PickerItem id={entryType} key={entryType}>
              {TYPE_LABELS[entryType] ?? formatLabel(entryType)}
            </PickerItem>
          ))}
        </Picker>
        <Picker
          label="Context"
          selectedKey={domain}
          onSelectionChange={(key) => setDomain(String(key))}
        >
          <PickerItem id="all">All contexts</PickerItem>
          {domains.map((entryDomain) => (
            <PickerItem id={entryDomain} key={entryDomain}>
              {formatLabel(entryDomain)}
            </PickerItem>
          ))}
        </Picker>
      </div>

      <p className="discovery-count" aria-live="polite" aria-atomic="true">
        {results.length} {results.length === 1 ? "resource" : "resources"} found
      </p>

      {results.length ? (
        <div className="design-system-grid">
          {results.map((entry) => (
            <article className="design-system-card" key={entry.id}>
              <p className="eyebrow">
                {TYPE_LABELS[entry.type] ?? formatLabel(entry.type)}
              </p>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              <ul className="tag-list" aria-label={`${entry.title} contexts`}>
                {entry.domains.map((entryDomain) => (
                  <li key={entryDomain}>{formatLabel(entryDomain)}</li>
                ))}
              </ul>
              <Link className="primary-link" href={entry.route}>
                Open resource
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="status-note">
          <h3>No matching resources</h3>
          <p>Try a broader search or change one of the filters.</p>
        </div>
      )}
    </div>
  );
}
