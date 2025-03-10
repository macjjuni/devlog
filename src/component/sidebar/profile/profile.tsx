import { memo } from "react";
import Image from "next/image";
import "./profile.scss";

interface ProfileProps {
  description?: string | null;
  imageUrl?: string | null;
}

function Profile({ description, imageUrl }: ProfileProps) {
  return (
    <div className="profile__card">
      {imageUrl && <Image className="profile__card__image" src={imageUrl} alt="profile image" width={400} height={400} />}
      <div className="profile__card__content">
        <p className="profile__card__content__name">{process.env.NEXT_PUBLIC_LOGO}</p>
        <p className="profile__card__content__status-message">{description}</p>
      </div>
    </div>
  );
}

export default memo(Profile);
