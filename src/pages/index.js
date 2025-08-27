import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Head from "@docusaurus/Head";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {currentLocale === "zh-Hans" ? "前端操作说明文件" : siteConfig.title}
        </Heading>
        <p>
          {currentLocale === "zh-Hans"
            ? "本文件提供美容百科、运动百科网站以及美容镜产品的使用入门指南，详细说明注册流程、文章浏览、搜寻功能与检测功能的操作步骤，并列出各类操作限制及注意事项。"
            : siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            {currentLocale === "zh-Hans" ? "阅读文件" : "閱讀文件"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`首頁`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
