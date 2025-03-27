"use client";

import React, { memo } from "react";
import BoxArea from "@/components/resume/boxArea/BoxArea";
import { ContactTypes } from "@/@types/resume";
import "./Contact.scss";

const Contact = ({ contact }: { contact: ContactTypes }) => {
  return (
    <BoxArea className="contact-area" label="Contact">
      <p className="contact-area__item">
        <span className="label">이메일:</span>
        {contact.email}
      </p>
      <p className="contact-area__item">
        <span className="label">연락처:</span>
        {contact.phone}
      </p>
      <p className="contact-area__item">
        <span className="label">깃허브:</span>
        <a href={contact.github} target="_blank" rel="noreferrer">
          {contact.github}
        </a>
      </p>
      <p className="contact-area__item">
        <span className="label">블로그:</span>
        <a href={contact.blog} target="_blank" rel="noreferrer">
          {contact.blog}
        </a>
      </p>
    </BoxArea>
  );
};

export default memo(Contact);
