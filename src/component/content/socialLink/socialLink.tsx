"use client";

import { memo } from "react";
import "./socialLink.scss";
import { KIcon } from "kku-ui";
import snsInfo from "@/config/sns";

function SocialLink() {
  return (
    <div className="social-link__container">
      {snsInfo.map((snsItem) => (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <a key={snsItem.id} href={snsItem.link} target="_blank" className="social-link" rel="noreferrer" title={snsItem.text}>
          <KIcon className="social-link__icon" icon={snsItem.icon} size={32} />
        </a>
      ))}
    </div>
  );
}

export default memo(SocialLink);
