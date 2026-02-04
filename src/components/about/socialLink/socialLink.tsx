"use client";

import { memo } from "react";
import "./socialLink.scss";
// import { KPopover, KPopoverContent, KPopoverTrigger, KIcon } from "kku-ui"; // Temporarily disabled for Next.js 16
import snsInfo from "@/config/sns";

// Temporary placeholder component during Next.js 16 upgrade
function SocialLink() {
  return (
    <div className="social-link__container">
      {snsInfo.map((snsItem) => (
        <a key={snsItem.id} href={snsItem.link} target="_blank" className="social-link" rel="noreferrer" title={snsItem.text}>
          {/* Icon placeholder */}
          <span className="social-link__icon">{snsItem.text}</span>
        </a>
      ))}
    </div>
  );
}

export default memo(SocialLink);
