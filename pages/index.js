/* eslint-disable global-require */
import React, { Component } from "react";

import {
  frontMatter,
  importAll,
  withParsedHtml,
  withNoBody,
  trimKeys,
  sortByDate,
} from "../utils";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import OtherProject from "../components/OtherProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import { Head } from "next/document";

const isServer = typeof window === "undefined";

class HomePage extends Component {
  static async getInitialProps() {
    // Ignore sample.md regex: https://github.com/webpack/webpack/issues/9733
    const homeContent = await importAll(
      require.context("../markdown/home/", true, /^\.\/(?!sample).*\.(md)$/)
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    const aboutContent = await importAll(
      require.context("../markdown/about/", true, /^\.\/(?!sample).*\.(md)$/)
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    const experienceContent = await importAll(
      require.context(
        "../markdown/experience/",
        true,
        /^\.\/(?!sample).*\.(md)$/
      )
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    const featuredContent = await importAll(
      require.context("../markdown/featured/", true, /^\.\/(?!sample).*\.(md)$/)
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    const projectsContent = await importAll(
      require.context("../markdown/projects/", true, /^\.\/(?!sample).*\.(md)$/)
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    const blogsContent = await importAll(
      require.context("../markdown/blogs/", true, /^\.\/(?!sample).*\.(md)$/)
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    const contactContent = await importAll(
      require.context("../markdown/contact/", true, /^\.\/(?!sample).*\.(md)$/)
    )
      .map(frontMatter)
      .map(withParsedHtml)
      .map(trimKeys)
      .map(withNoBody);

    return {
      content: {
        homeContent,
        aboutContent,
        experienceContent: sortByDate(experienceContent),
        featuredContent: sortByDate(featuredContent),
        projectsContent: sortByDate(projectsContent),
        blogsContent: sortByDate(blogsContent),
        contactContent,
      },
    };
  }

  componentDidMount() {
    // activate wow.js
    if (!isServer) {
      const WOW = require("wowjs");

      const wow = new WOW.WOW({
        live: false,
      });
      wow.init();
    }
  }

  render() {
    const {
      content: {
        homeContent,
        aboutContent,
        experienceContent,
        featuredContent,
        projectsContent,
        blogsContent,
        contactContent,
      },
    } = this.props;
    return (
      <Layout>
        <Header />
        <Sidebar />
        <script type="text/javascript" src="static/buymecoffee.js"></script>
        <main id="content__holder" className="container">
          <Home content={homeContent} />
          <About content={aboutContent} />
          <Experience content={experienceContent} />
          <Projects content={featuredContent} />
          <OtherProject content={projectsContent} />
          <Articles content={blogsContent} />
          <Contact content={contactContent} />
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default HomePage;
