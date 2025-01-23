import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Feature({ image, title, path }) {
  return (
    <div className={"col col--4"}>
      <div className="text--center">
        <img
          src={image}
          style={{ height: "200px", width: `100%`, objectFit: "cover" }}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md pt-2">
        <Heading as="h3">
          <Link href={path} className={`button button--primary button--lg`}>
            {title}
          </Link>
        </Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const FeatureList = [
    {
      title:
        currentLocale === "zh-Hans" ? "前往美容百科网站" : "前往美容百科網站",
      image: require("./img/meta_image_1200x600.jpg").default,
      path: "https://beauty.kinglyrobot.com/",
    },
    {
      title:
        currentLocale === "zh-Hans" ? "前往运动百科网站" : "前往運動百科網站",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "https://sport.kinglyrobot.com/",
    },
    {
      title: "美容鏡",
      image:
        "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "https://sport.kinglyrobot.com/",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row`}>
          {FeatureList.map((props, index) => (
            <Feature key={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
