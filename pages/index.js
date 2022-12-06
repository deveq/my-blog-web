import React from 'react';
import styles from '../styles/Home.module.css';
// import sanityClient from '@sanity/client';
import SanityService from '../services/SanityService';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { CodeOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import BlogHeadLine from '../components/BlogHeadLine';
import BlogMainPost from '../components/BlogMainPost';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

export default function Home({ home, posts }) {
  const mainPost = posts.find(p => p.slug === home.mainPostUrl);
  const otherPosts = posts.filter(p => p.slug !== home.mainPostUrl);
  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadLine />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPosts} />
      <Footer />
    </div>
  );
}

// getStaticProps 이름은 고정
export async function getStaticProps() {
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();
  // sanity로부터 데이터를 가져온다.
  return {
    props: {
      home,
      posts,
    },
  };
}
