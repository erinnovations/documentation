import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './card.module.scss';
import IconArrow from '@site/static/img/assets/icons/arrow-right.svg';

export function Card({
  children,
  className,
  description,
  href,
  imgSrc,
  imgBgSrc,
  isContentDelimited = false,
  title,
  to,
  variant,
  ...rest
}) {
  const asCallToAction = !!(href || to);
  const WrapperElement = asCallToAction ? (to ? Link : 'a') : 'div';
  const TitleElement = asCallToAction ? 'h3' : 'h2';

  return (
    <WrapperElement
      {...(!href ? {} : { href, target: '_blank' })}
      {...(!to ? {} : { to })}
      className={clsx(
        styles.card,
        (asCallToAction && styles['card--cta']),
        (isContentDelimited && styles['card--content-delimited']),
        (variant && styles[`card--${variant}`]),
        className,
      )}
      {...rest}
    >
      {imgBgSrc && (
        <img
          className={styles['card__img-bg']}
          src={imgBgSrc}
        />
      )}
      {title && (
        <TitleElement className={styles.card__title}>
          {title}
          {asCallToAction && (
            <span className={styles.card__title__arrow}>
              <IconArrow />
            </span>
          )}
        </TitleElement>
      )}
      {description && (
        <div className={styles.card__description}>
          {description}
        </div>
      )}
      {children}
      {imgSrc && (
        <img
          className={styles.card__img}
          src={imgSrc}
        />
      )}
    </WrapperElement>
  );
}
