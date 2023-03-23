import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './home.module.scss';
import {
  Button,
  Card,
  Carousel,
  CarouselSlide,
  Container,
  FeaturesList,
  Hero,
  HeroDescription,
  HeroTitle,
  LinkWithArrow,
} from '../../components';

const pageTitle = 'Welcome to Strapi’s documentation';
const pageDescription = 'Get set up in minutes to build any projects in hours instead of weeks.';

export default function PageHome() {
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .navbar {
              filter: drop-shadow(0px 2px 15px rgba(33, 33, 52, 0.1));
            }

            html[data-theme='dark'] {
              --ifm-background-color: #181826;
              --ifm-navbar-background-color: #181826;

              --strapi-primary-600: #4945FF;
            }
          `,
        }}
      />
      <main className={clsx('font-poppins', styles.home)}>
        <Hero id="homeHero">
          <Container>
            <HeroTitle
              dangerouslySetInnerHTML={{
                __html: pageTitle.replace('Strapi', '<br />Strapi'),
              }}
            />
            <HeroDescription>
              {pageDescription}
            </HeroDescription>
          </Container>
        </Hero>
        <section
          id="homeCarousel"
          className={styles.home__carousel}
        >
          <Container>
            <Carousel>
              {[
                {
                  isContentDelimited: true,
                  title: 'Can’t wait to use Strapi?',
                  description: (
                    <>
                      {'If demos are more your thing, we have a '}
                      <a href="https://youtu.be/zd0_S_FPzKg" target="_blank">video demo</a>
                      {', or you can request a '}
                      <a href="https://strapi.io/demo" target="_blank">live demo</a>!
                    </>
                  ),
                  children: (
                    <div className={styles.home__carousel__cta}>
                      <Button
                        to="/dev-docs/quick-start"
                        size="huge"
                        decorative="🚀"
                      >
                        Quick start
                      </Button>
                    </div>
                  ),
                },
                {
                  imgBgSrc: require('@site/static/img/assets/home/carousel-background--cloud.png').default,
                  isContentDelimited: true,
                  variant: 'cloud',
                  title: 'Strapi Cloud',
                  description: (
                    <>
                      {'If demos are more your thing, we have a '}
                      <a href="https://youtu.be/zd0_S_FPzKg" target="_blank">video demo</a>
                      {', or you can request a '}
                      <a href="https://strapi.io/demo" target="_blank">live demo</a>!
                    </>
                  ),
                  children: (
                    <div className={styles.home__carousel__cta}>
                      <Button
                        to="/cloud/intro"
                        size="huge"
                        decorative="☁️"
                      >
                        Strapi Cloud
                      </Button>
                    </div>
                  ),
                },
              ].map((carouselItem, carouselItemIndex) => (
                <CarouselSlide key={`pageHomeCarouselItem${carouselItemIndex}`}>
                  <Card {...carouselItem} />
                </CarouselSlide>
              ))}
            </Carousel>
          </Container>
        </section>
        <section
          id="homeCategories"
          className={styles.home__categories}
        >
          <Container>
            <div className="row row--huge">
              {[
                {
                  card: {
                    to: '/dev-docs/intro',
                    title: 'Developer Documentation',
                    description: 'All you need to get your project up-and-running, and become a Strapi expert',
                    imgSrc: require('@site/static/img/assets/home/preview--dev-docs.jpg').default,
                  },
                  linksIcon: require('@site/static/img/assets/icons/code.svg').default,
                  linksIconColor: 'green',
                  links: [
                    {
                      children: 'Installation guides',
                      to: '/dev-docs/installation',
                    },
                    {
                      children: 'Database configuration',
                      to: '/dev-docs/configurations/database',
                    },
                    {
                      children: 'Deployment guides',
                      to: '/dev-docs/deployment',
                    },
                    {
                      children: 'REST API',
                      to: '/dev-docs/api/rest',
                    },
                    {
                      children: 'GraphQL API',
                      to: '/dev-docs/api/graphql',
                    },
                  ],
                },
                {
                  card: {
                    to: '/user-docs/intro',
                    title: 'User Guide',
                    description: 'Get the most out of the admin panel with our user guide',
                    imgSrc: require('@site/static/img/assets/home/preview--user-guides.jpg').default,
                  },
                  linksIcon: require('@site/static/img/assets/icons/feather.svg').default,
                  linksIconColor: 'blue',
                  links: [
                    {
                      children: 'Getting started in the admin panel',
                      to: '/user-docs/intro#accessing-the-admin-panel',
                    },
                    {
                      children: 'Creating content-types',
                      to: '/user-docs/content-type-builder/creating-new-content-type',
                    },
                    {
                      children: 'Configuring content-types fields',
                      to: '/user-docs/content-type-builder/configuring-fields-content-type',
                    },
                    {
                      children: 'Writing content',
                      to: '/user-docs/content-manager/writing-content',
                    },
                    {
                      children: 'Setting up the admin panel',
                      to: '/user-docs/settings/managing-global-settings',
                    },
                  ],
                },
              ].map((categoryItem, categoryItemIndex) => {
                return (
                  <div
                    key={`pageHomeCategoryItem${categoryItemIndex}`}
                    className={clsx(
                      'col',
                      'col--6',
                      styles.home__categories__item,
                    )}
                  >
                    {categoryItem.card && (
                      <Card {...categoryItem.card} />
                    )}
                    {categoryItem.links && (
                      <FeaturesList
                        icon={categoryItem.linksIcon}
                        iconColor={categoryItem.linksIconColor}
                        items={categoryItem.links}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <section
          id="homeHelpUsToImprove"
          className={styles.home__huitd}
        >
          <Container>
            <LinkWithArrow
              apart
              className={styles.home__huitd__link}
              href="https://github.com/strapi/documentation"
            >
              Help us improve the documentation
            </LinkWithArrow>
          </Container>
        </section>
      </main>
    </Layout>
  );
}
