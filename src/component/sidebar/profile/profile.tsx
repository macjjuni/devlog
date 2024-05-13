import { memo } from 'react';
import './profile.scss';
// import Image from 'next/image';

function Profile() {
  return (
    <div className="profile__card">
      <img
        className="profile__card__image"
        src="https://kku.dev/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1779229735543070720%2FZqM1P-8i_400x400.jpg&w=1200&q=75"
        alt="profile image"
        width={400}
        height={400}
      />
      <div className="profile__card__content">
        <p className="profile__card__content__name">꾸생</p>
        <p className="profile__card__content__status-message">Stay humble and stack sats.</p>
      </div>
    </div>
  );
}

export default memo(Profile);
