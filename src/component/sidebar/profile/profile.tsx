import Image from "next/image";
import config from "@/config/notion.config";
import "./profile.scss";

interface ProfileProps {
  description?: string | null;
}

const { PROFILE_IMAGE } = config?.profile || { PROFILE_IMAGE: null };

export default function Profile({ description }: ProfileProps) {
  return (
    <div className="profile__card">
      {PROFILE_IMAGE && <Image className="profile__card__image" src={PROFILE_IMAGE} alt="profile image" width={360} height={360} />}
      <div className="profile__card__content">
        <p className="profile__card__content__name">꾸생</p>
        <p className="profile__card__content__status-message">{description}</p>
      </div>
    </div>
  );
}
