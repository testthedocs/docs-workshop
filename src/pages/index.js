import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--6", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={classnames("padding-vert--md", styles.featureImage)}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="API things"
      keywords={[
        "foobar",
      ]}
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames("col col--5 col--offset-1")}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <p>
                Here you'll find guides, resources, and references.
              </p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--outline button--primary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("intro")}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className={classnames("col col--5")}>
              <img
                className={styles.heroImg}
                src="img/pngegg.png"
                class="onna-home-animation"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="box-wrapper" markdown="1">
            <div className="box box1 card">
              <div className="container">
                <h2>How to use the API</h2>
                <p>Getting started, guides and tutorials.</p>
                <ul>
                  <li>
                    <a href="/getting-started/quickstart">Quickstart</a>
                  </li>
                  <li>
                    <a href="getting-started/authentication">Authentication</a>
                  </li>
                  <li>
                    <a href="/guides/postman">Using Postman</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box box2 card">
              <div className="container">
                <h2>Internal developer docs</h2>
                <p>All about our internal developer setup, how to add new endpoints,
                   how to add documentation and more. </p>
                <ul>
                  <li>
                    <a href="/development/dev-start">Overview</a>
                  </li>
                  <li>
                    <a href="getting-started/authentication">Authentication</a>
                  </li>
                  <li>
                    <a href="https://onna.com">Link 4</a>,{" "}
                    <a href="https://onna.com">Link 5</a>,{" "}
                    <a href="https://onna.com">Link 6</a>, or{" "}
                    <a href="https://onna.com">This is a link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container"><p></p></div>
      </main>
    </Layout>
  );
}

export default Home;
