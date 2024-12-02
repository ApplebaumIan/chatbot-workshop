import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectReadme from "../components/ReademeMD";
import styles from './index.module.css';
import MDXContent from '@theme/MDXContent';
import Figure from "../components/Figure";
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false)
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
                <Link to="/#step-1-create-a-discord-bot" className="button button--secondary button--lg">
                    Workshop - Get Started 🏁️
                </Link>
                <Link to="https://github.com/codespaces/new?repo=ApplebaumIan/chatbot-workshop"
                      className="button button--secondary button--lg">
                    Codespace - Build your Bot 🤖
                </Link>
                <button onClick={()=>{setOpen(!open)}} className={"button button--secondary button--lg"}>
                    {/*<Link to="/#" className="button button--secondary button--lg">*/}

                    { open ? "🔽  " :  "▶️ " }
                    Follow Along - Slides 👨‍🏫
                    {/*</Link>*/}
                </button>
            </div>
            <details open={open}>
                <summary style={{display:"none"}}></summary>
                <Figure caption={"What is Prompt Engineering?"} subcaption={
                    <a href={"/chatbot-workshop/slides-html/Chatbot-Workshop/#2"} target={"_blank"}
                       rel="noopener noreferrer">full screen click here</a>}>
                    <iframe height={"500"} width={"100%"} src="/chatbot-workshop/slides-html/Chatbot-Workshop/#2"
                            title="W3Schools Free Online Web Tutorials"></iframe>
                </Figure>
            </details>
        </div>
    </header>
  );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <MDXContent>
                    <ProjectReadme/>
                </MDXContent>
            </main>
        </Layout>
    );
}
