"use client";

import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import "./socialLink.scss";
import { KDropHolder, KDropHolderRefs, KIcon } from "kku-ui";
import snsInfo from "@/config/sns";
import copyToClipboard from "@/utils/clipboard";

const emailText = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "";

function SocialLink() {
  // region [Hooks]

  const dropHolderRef = useRef<KDropHolderRefs>(null);
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);

  // endregion

  // region [Apis]

  const autoClosePopup = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      dropHolderRef.current?.close();
    }, 2400);
  }, []);

  const cancelClosePopup = useCallback(() => {
    if (!timeoutRef.current) {
      return;
    }
    clearTimeout(timeoutRef.current);
    window.removeEventListener("click", cancelClosePopup);
  }, []);

  const copyEmail = useCallback(async () => {
    copyToClipboard(emailText).then(() => {
      autoClosePopup();
    });
  }, []);

  // endregion

  // region [Life Cycles]

  useEffect(() => {
    return () => cancelClosePopup();
  }, []);

  // endregion

  // region [Events]

  const onClickCopyEmail = useCallback(async () => {
    window.addEventListener("click", cancelClosePopup);
    await copyEmail();
  }, []);

  // endregion

  // region [Templates]

  const copyCompleteBox = useMemo(() => {
    return <div className={"copied__complete__wrapper"}>Copied!</div>;
  }, []);

  // endregion

  return (
    <div className="social-link__container">
      {snsInfo.map((snsItem) => (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <a key={snsItem.id} href={snsItem.link} target="_blank" className="social-link" rel="noreferrer" title={snsItem.text}>
          <KIcon className="social-link__icon" icon={snsItem.icon} size={32} />
        </a>
      ))}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type={"button"} className="social-button" onClick={onClickCopyEmail}>
        <KDropHolder ref={dropHolderRef} content={copyCompleteBox} offset={"20px"}>
          <KIcon className="social-link__icon" icon={"gmail"} color={"#fff"} size={32} />
        </KDropHolder>
      </button>
    </div>
  );
}

export default memo(SocialLink);
