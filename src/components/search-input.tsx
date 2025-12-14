"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useSearchQuery } from "@/hooks/use-search-query";

export function SearchInput({
  placeholder = "Search",
}: {
  placeholder?: string;
}) {
  const { query, setQuery } = useSearchQuery();

  useHotkeys("esc", () => setQuery(null), { enableOnFormTags: true });

  return (
    <InputGroup className="rounded-lg">
      <InputGroupAddon className="pl-2">
        <SearchIcon />
      </InputGroupAddon>

      <InputGroupInput
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <InputGroupAddon
        className="data-[disabled=true]:hidden"
        align="inline-end"
        data-disabled={!query.length}
      >
        <InputGroupButton
          aria-label="Clear"
          title="Clear"
          size="icon-xs"
          onClick={() => setQuery(null)}
        >
          <XIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
