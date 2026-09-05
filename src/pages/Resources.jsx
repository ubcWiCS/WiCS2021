import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ColorBgFooter from "../components/navigation/ColorBgFooter";
import {
  meta,
  intro,
  deptLinks,
  researchGroups,
  sections,
} from "../data/resources";

// clears the sticky navbar (4rem) plus the sticky section bar (3rem)
const anchorOffset = { scrollMarginTop: "7rem" };

// soft white glow so the heading lifts off the gradient banner
const titleGlow = {
  textShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 45px rgba(255,255,255,0.6)",
};

/* Smooth-scrolls same-page anchors instead of jumping. */
function scrollToAnchor(event, hash) {
  const target = document.getElementById(hash.slice(1));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", hash);
}

/* Turns [label](key) into links. `key` is a deptLinks key, a #anchor, or a URL. */
function Inline({ text }) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes = [];
  let last = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, label, key] = match;

    if (key.charAt(0) === "#") {
      nodes.push(
        <a
          key={match.index}
          href={key}
          onClick={(e) => scrollToAnchor(e, key)}
          className="text-wicsPurple underline"
        >
          {label}
        </a>
      );
    } else {
      const isDept = Object.prototype.hasOwnProperty.call(deptLinks, key);
      nodes.push(
        <a
          key={match.index}
          href={isDept ? deptLinks[key] : key}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isDept
              ? "text-wicsPurple font-semibold underline"
              : "text-gray-900 underline hover:text-wicsPurple"
          }
        >
          {label}
        </a>
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

/* Columns drive the sort dropdown, the headers, and the cells.
   `href` names the field to link to, `format: "host"` shows just the domain. */
const COLUMNS = [
  { key: "researchGroup", label: "Research Group", href: "website" },
  { key: "website", label: "Website", format: "host" },
  {
    key: "readingGroupWebsite",
    label: "Reading Group",
    href: "readingGroupWebsite",
    format: "host",
    reading: true,
  },
  { key: "readingGroupHours", label: "Hours", reading: true },
];

const hostname = (url) => url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];

// what a cell shows, and what it sorts on — blank when there's no value
const cellText = (column, group) => {
  const value = group[column.key];
  if (!value) return "";
  return column.format === "host" ? hostname(value) : value;
};

function ResearchGroupsTable() {
  const [showReading, setShowReading] = useState(false);
  const [crossOutMode, setCrossOutMode] = useState(false);
  const [crossed, setCrossed] = useState([]);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDir, setSortDir] = useState("asc");

  const columns = COLUMNS.filter((column) => showReading || !column.reading);

  const toggleReading = () => {
    // stop sorting by a column we're about to hide
    if (showReading && COLUMNS.some((c) => c.reading && c.key === sortKey)) {
      setSortKey("");
    }
    setShowReading(!showReading);
  };

  const sortBy = (key) => {
    if (key === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const toggleRow = (name) => {
    if (!crossOutMode) return;
    setCrossed((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const term = query.trim().toLowerCase();
  const rows = researchGroups.filter((group) =>
    group.researchGroup.toLowerCase().includes(term)
  );

  if (sortKey) {
    const column = COLUMNS.find((c) => c.key === sortKey);
    rows.sort((a, b) => {
      const left = cellText(column, a);
      const right = cellText(column, b);
      if (!left || !right) return !left && !right ? 0 : !left ? 1 : -1; // blanks last
      return sortDir === "asc"
        ? left.localeCompare(right)
        : right.localeCompare(left);
    });
  }

  const controlClass = (active) =>
    `font-mono text-xs px-4 py-2 rounded-lg border shadow-sm transition inline-flex items-center gap-2 ${
      active
        ? "bg-wicsPurple text-white border-wicsPurple"
        : "bg-white text-wicsPurple border-lavender-200 hover:bg-lavender-100"
    }`;

  return (
    <div className="my-6">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter groups..."
          aria-label="Filter research groups"
          className="flex-1 min-w-0 border border-lavender-200 rounded-lg px-4 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:border-wicsPurple"
        />
        <label
          htmlFor="sort-groups"
          className="font-mono text-xs uppercase tracking-widest text-wicsPurple"
        >
          Sort
        </label>
        <select
          id="sort-groups"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          className="border border-lavender-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white shadow-sm focus:outline-none focus:border-wicsPurple"
        >
          <option value="">None</option>
          {columns.map((column) => (
            <option key={column.key} value={column.key}>
              {column.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={!sortKey}
          onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
          className={`${controlClass(false)} ${
            sortKey ? "" : "opacity-50 cursor-not-allowed"
          }`}
        >
          {sortDir === "asc" ? "↑ Asc" : "↓ Desc"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <button
          type="button"
          aria-pressed={showReading}
          onClick={toggleReading}
          className={controlClass(showReading)}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              showReading ? "bg-white" : "bg-lavender-200"
            }`}
          />
          Reading group info
        </button>
        <button
          type="button"
          aria-pressed={crossOutMode}
          onClick={() => setCrossOutMode(!crossOutMode)}
          className={controlClass(crossOutMode)}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              crossOutMode ? "bg-white" : "bg-lavender-200"
            }`}
          />
          Cross out mode
        </button>
        {crossed.length > 0 && (
          <button
            type="button"
            onClick={() => setCrossed([])}
            className="font-mono text-xs px-4 py-2 rounded-lg border border-gray-300 text-gray-700 shadow-sm hover:bg-lavender-50"
          >
            Clear ({crossed.length})
          </button>
        )}
      </div>

      {crossOutMode && (
        <p className="font-mono text-xs text-gray-600 mb-2">
          Click a row to cross out groups you aren't interested in.
        </p>
      )}

      <div className="overflow-x-auto border border-lavender-200 rounded-lg">
        <table className="w-full text-sm text-left font-poppins">
          <thead className="bg-lavender-100 text-wicsPurple">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => sortBy(column.key)}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-widest cursor-pointer select-none hover:bg-lavender-200"
                >
                  {column.label}
                  <span className="ml-2">
                    {sortKey !== column.key ? (
                      <span className="text-gray-500">↕</span>
                    ) : sortDir === "asc" ? (
                      "↑"
                    ) : (
                      "↓"
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((group, i) => {
              const isCrossed = crossed.includes(group.researchGroup);
              return (
                <tr
                  key={group.researchGroup}
                  onClick={() => toggleRow(group.researchGroup)}
                  className={`border-t border-lavender-200 ${
                    i % 2 === 1 ? "bg-lavender-50" : "bg-white"
                  } ${crossOutMode ? "cursor-pointer hover:bg-lavender-200" : ""} ${
                    isCrossed ? "line-through opacity-50" : ""
                  }`}
                >
                  {columns.map((column) => {
                    const href = column.href && group[column.href];
                    const label = cellText(column, group);
                    return (
                      <td key={column.key} className="px-4 py-3 text-gray-800">
                        {!label ? (
                          <span className="text-gray-500">—</span>
                        ) : href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-semibold text-wicsPurple underline"
                          >
                            {label}
                          </a>
                        ) : column.format === "host" ? (
                          <span className="font-mono text-xs text-gray-700">
                            {label}
                          </span>
                        ) : (
                          label
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr className="border-t border-lavender-200">
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-gray-700"
                >
                  No groups match "{query}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-gray-800 leading-relaxed mb-4">
          <Inline text={block.text} />
        </p>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-wicsPurple bg-lavender-50 rounded-r-lg px-5 py-4 mb-4">
          <p className="text-gray-800 italic">{block.text}</p>
          <a
            href={block.citation}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-wicsPurple underline mt-2 inline-block"
          >
            {block.citationLabel}
          </a>
        </blockquote>
      );

    case "heading":
      return (
        <h4
          id={block.id}
          style={anchorOffset}
          className="text-lg font-semibold text-gray-900 mt-8 mb-3"
        >
          {block.text}
        </h4>
      );

    case "note":
      return (
        <p className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-4 text-amber-800">
          {block.text}
        </p>
      );

    case "questions":
      return (
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {block.categories.map((category) => (
            <div
              key={category.title}
              className="border border-lavender-200 rounded-lg p-5"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest text-wicsPurple mb-3">
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "steps":
      return (
        <ol className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li
              key={item.title}
              className="flex gap-5 border border-lavender-200 rounded-lg p-5"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-wicsPurple text-white font-mono text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-800 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    /* Whole card is one link, so the click target covers the full block. */
    case "links":
      return (
        <ul className="space-y-3 mb-6">
          {block.items.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-lavender-50 border border-lavender-200 rounded-lg p-5 hover:bg-lavender-100 transition"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <span className="font-semibold text-wicsPurple">
                    {item.title}
                  </span>
                  {item.tag && (
                    <span className="font-mono text-xs uppercase tracking-wide text-wicsPurple bg-white border border-lavender-200 rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  )}
                  <span className="font-mono text-xs text-wicsPurple ml-auto">
                    Visit ↗
                  </span>
                </div>
                {item.description && (
                  <p className="text-gray-800 mt-2">{item.description}</p>
                )}
              </a>
            </li>
          ))}
        </ul>
      );

    case "badges":
      return (
        <ul className="flex flex-wrap gap-2 mb-2">
          {block.items.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-lavender-200 rounded-full px-4 py-2 font-medium text-wicsPurple hover:bg-lavender-100 transition"
              >
                {item.title}
                <span className="font-mono text-xs">↗</span>
              </a>
            </li>
          ))}
        </ul>
      );

    /* A titled container that nests other blocks under a subsection. */
    case "group":
      return (
        <div className="border border-lavender-200 rounded-lg p-6 mb-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            {block.title}
          </h4>
          {block.blocks.map((child, i) => (
            <Block key={i} block={child} />
          ))}
        </div>
      );

    case "opportunities":
      return (
        <div className="space-y-4 mb-6">
          {block.items.map((item) => (
            <div
              key={item.title}
              className="border border-lavender-200 rounded-lg p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>
                {item.meta && (
                  <span className="font-mono text-xs uppercase tracking-wide text-wicsPurple bg-lavender-100 rounded-full px-3 py-1">
                    {item.meta}
                  </span>
                )}
              </div>

              <p className="text-gray-800 mt-3">{item.description}</p>

              {item.details && (
                <ul className="mt-3 pl-5 list-disc space-y-1 text-gray-800">
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <Inline text={detail} />
                    </li>
                  ))}
                </ul>
              )}

              {item.tip && (
                <p className="mt-4 text-gray-800 bg-lavender-50 rounded-lg px-4 py-3">
                  <span className="font-mono text-xs text-wicsPurple mr-2">
                    TIP
                  </span>
                  <Inline text={item.tip} />
                </p>
              )}

              {item.link && (
                <a
                  href={deptLinks[item.link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wicsPurple font-semibold mt-4 inline-block"
                >
                  Learn more
                </a>
              )}
            </div>
          ))}
        </div>
      );

    case "researchGroupsTable":
      return <ResearchGroupsTable />;

    default:
      return null;
  }
}

export default function Resources() {
  const { hash } = useLocation();

  // scroll to the section picked from the navbar dropdown
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <main className="bg-white font-poppins">
        <header className="bg-gradient-to-b from-wicsPink to-wicsIndigo px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-wicsPurple mb-3">
              Resources
            </p>
            <h1
              style={titleGlow}
              className="text-4xl md:text-5xl font-bold text-wicsPurple"
            >
              {meta.title}
            </h1>
            <p className="text-lg text-gray-800 mt-2">{meta.subtitle}</p>
            <p className="text-gray-800 leading-relaxed mt-6">{intro}</p>
          </div>
        </header>

        {/* sits directly under the site navbar while scrolling */}
        <nav
          className="sticky z-10 bg-white border-b border-lavender-200 shadow-sm"
          style={{ top: "4rem" }}
        >
          <div className="max-w-3xl mx-auto px-6 flex flex-wrap gap-2 py-2">
            {sections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToAnchor(e, `#${section.id}`)}
                className="font-mono text-xs text-wicsPurple border border-lavender-200 rounded-lg px-4 py-2 hover:bg-lavender-100 transition"
              >
                {String(i + 1).padStart(2, "0")} {section.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-6 pb-12">
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              style={anchorOffset}
              className="pt-16"
            >
              <p className="font-mono text-sm text-wicsPurple mb-1">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-wicsPurple border-b-2 border-lavender-200 pb-4 mb-8">
                {section.title}
              </h2>

              {(section.blocks || []).map((block, b) => (
                <Block key={b} block={block} />
              ))}

              {(section.subsections || []).map((subsection) => (
                <div
                  key={subsection.id}
                  id={subsection.id}
                  style={anchorOffset}
                  className="mt-12"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {subsection.title}
                  </h3>
                  {subsection.blocks.map((block, b) => (
                    <Block key={b} block={block} />
                  ))}
                </div>
              ))}
            </section>
          ))}

          <footer className="border-t border-lavender-200 mt-16 pt-6 text-sm text-gray-700">
            <p className="mb-2">{meta.disclaimer}</p>
            <p className="mb-2">
              <Inline text={meta.feedback} />
            </p>
            <p className="font-mono text-xs">
              Adapted from{" "}
              <a
                href={meta.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-wicsPurple underline"
              >
                {meta.title}
              </a>{" "}
              by {meta.writtenBy} · Last updated {meta.lastUpdated}
            </p>
          </footer>
        </div>
      </main>
      <ColorBgFooter />
    </>
  );
}
