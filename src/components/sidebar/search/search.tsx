"use client";

import { memo } from "react";
// import SearchModal from "@/components/sidebar/search/searchModal";
// import { KButton, KIcon } from "kku-ui"; // Temporarily disabled for Next.js 16
import "./search.scss";

// Temporary placeholder component during Next.js 16 upgrade
function Search() {
  return (
    <div className="search__card">
      <div className="search__card__input">
        <div className={"search__card__input__icon__container"}>
          Search... (temporarily disabled)
        </div>
      </div>
    </div>
  );
}

export default memo(Search);
