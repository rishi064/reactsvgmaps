import { useEffect, useId, useMemo, useRef, useState } from "react";

const fold = (s) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const triggerClass =
  "flex items-center justify-between gap-2 w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-left text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#023f45] focus:border-transparent cursor-pointer shadow-sm transition-all";

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`shrink-0 h-4 w-4 fill-current text-gray-500 transition-transform duration-150 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="shrink-0 h-4 w-4 fill-current"
    >
      <path d="M7.629 14.571L3.5 10.442l1.414-1.414 2.715 2.715 7.457-7.457 1.414 1.414z" />
    </svg>
  );
}

function Dropdown({
  label,
  value,
  options,
  onChange,
  searchable = options.length > 8,
  emptyText = "No matches",
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const id = useId();
  const labelId = `${id}-label`;
  const listId = `${id}-list`;
  const optionId = (i) => `${id}-option-${i}`;

  const selected = options.find((o) => o.value === value);

  const filtered = useMemo(() => {
    const q = fold(query.trim());
    if (!q) return options;
    return options.filter((o) => fold(o.label).includes(q));
  }, [options, query]);

  const openMenu = () => {
    // Open on the current selection; typing then restarts from the top.
    const i = options.findIndex((o) => o.value === value);
    setActiveIndex(i === -1 ? 0 : i);
    setOpen(true);
  };

  const close = ({ focusTrigger = true } = {}) => {
    setOpen(false);
    setQuery("");
    if (focusTrigger) buttonRef.current?.focus();
  };

  const choose = (option) => {
    if (!option) return;
    onChange(option.value);
    close();
  };

  useEffect(() => {
    if (open && searchable) inputRef.current?.focus();
  }, [open, searchable]);

  // Keep the highlighted row in view when arrowing through a long list.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onKeyDown = (e) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) =>
          filtered.length ? (i + 1) % filtered.length : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) =>
          filtered.length ? (i - 1 + filtered.length) % filtered.length : 0,
        );
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(Math.max(filtered.length - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        choose(filtered[activeIndex]);
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      case "Tab":
        close({ focusTrigger: false });
        break;
      default:
        break;
    }
  };

  const activeDescendant =
    open && filtered.length ? optionId(activeIndex) : undefined;

  return (
    <div className="flex flex-col gap-2 flex-1 min-w-44" ref={rootRef}>
      <span
        id={labelId}
        className="text-sm font-semibold text-gray-500 uppercase tracking-wide"
      >
        {label}
      </span>

      <div className="relative">
        <button
          type="button"
          ref={buttonRef}
          className={triggerClass}
          onClick={() => (open ? close() : openMenu())}
          onKeyDown={onKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={labelId}
          aria-controls={open ? listId : undefined}
          role={!searchable && open ? "combobox" : undefined}
          aria-activedescendant={!searchable ? activeDescendant : undefined}
        >
          <span className="truncate">{selected?.label ?? "Select…"}</span>
          <Chevron open={open} />
        </button>

        {open && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {searchable && (
              <div className="p-2 border-b border-gray-100">
                <input
                  ref={inputRef}
                  type="text"
                  role="combobox"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={onKeyDown}
                  placeholder="Search…"
                  aria-label={`Search ${label.toLowerCase()}`}
                  aria-expanded="true"
                  aria-controls={listId}
                  aria-autocomplete="list"
                  aria-activedescendant={activeDescendant}
                  autoComplete="off"
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#023f45] focus:border-transparent"
                />
              </div>
            )}

            <ul
              id={listId}
              ref={listRef}
              role="listbox"
              aria-labelledby={labelId}
              className="max-h-64 overflow-y-auto overscroll-contain py-1 m-0"
            >
              {filtered.map((option, i) => {
                const isSelected = option.value === value;
                return (
                  <li
                    key={option.value}
                    id={optionId(i)}
                    data-index={i}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => choose(option)}
                    onMouseMove={() => setActiveIndex(i)}
                    className={`flex items-center justify-between gap-2 px-4 py-2 text-sm cursor-pointer select-none ${
                      i === activeIndex ? "bg-gray-100" : "bg-transparent"
                    } ${
                      isSelected
                        ? "text-[#023f45] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && <Check />}
                  </li>
                );
              })}

              {filtered.length === 0 && (
                <li className="px-4 py-3 text-sm text-gray-400">{emptyText}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
