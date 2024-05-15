import { memo } from "react";
import Image from "next/image";
import "./profile.scss";

interface ProfileProps {
  description: string;
  imageUrl: string | null;
}

function Profile({ description, imageUrl }: ProfileProps) {
  return (
    <div className="profile__card">
      {imageUrl && <Image className="profile__card__image" src={imageUrl} alt="profile image" width={400} height={400} />}
      <div className="profile__card__content">
        <p className="profile__card__content__name">꾸생</p>
        <p className="profile__card__content__status-message">{description}</p>
      </div>
    </div>
  );
}

export default memo(Profile);
