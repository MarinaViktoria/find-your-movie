import { useRef } from "react";
import { useKey } from "./useKey";

export function Search({ query, setQuery }) {
  const inputEL = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEL.current) return;
    inputEL.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      spellcheck="false"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEL}
    />
  );
}
