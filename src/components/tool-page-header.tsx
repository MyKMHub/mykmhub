"use client";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@react-spectrum/s2/Disclosure";

interface ToolPageHeaderProps {
  title: string;
  status: string;
  lastVerified: string;
  lastVerifiedLabel: string;
  description: string;
  expandedDescription: string;
  instructions: string;
  relatedLinks?: Array<{ href: string; label: string }>;
}

export function ToolPageHeader({
  title,
  status,
  lastVerified,
  lastVerifiedLabel,
  description,
  expandedDescription,
  instructions,
  relatedLinks = [],
}: ToolPageHeaderProps) {
  return (
    <header className="page-header compact-tool-header">
      <h1>{title}</h1>
      <div className="compact-tool-meta">
        <p><strong>Status:</strong> {status}</p>
        <p>
          <strong>Last verified:</strong>{" "}
          <time dateTime={lastVerified}>{lastVerifiedLabel}</time>
        </p>
      </div>
      <p className="clamped-tool-description">
        <strong>Description:</strong> {description}
      </p>
      <Disclosure isQuiet density="compact" size="S">
        <DisclosureTitle level={2}>More description</DisclosureTitle>
        <DisclosurePanel>
          <p>{expandedDescription}</p>
          {relatedLinks.map((link) => (
            <p key={link.href}><a href={link.href}>{link.label}</a></p>
          ))}
        </DisclosurePanel>
      </Disclosure>
      <p><strong>Instructions:</strong> {instructions}</p>
    </header>
  );
}
