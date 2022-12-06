import React, { useEffect } from 'react';
import SanityService from '../../services/SanityService';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import BlogHeadLine from '../../components/BlogHeadLine';
import BlogMainPost from '../../components/BlogMainPost';
import Footer from '../../components/Footer';
import BlogPostDetail from '../../components/BlogPostDetail';

export default function PostAll({ slug, post }) {
  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadLine />
      <BlogMainPost {...post} />
      <BlogPostDetail blocks={post.content} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();
  const paths = posts.map(post => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    // false일 경우 paths에 없는 경로로 요청이 왔을 때
    // 404로 보내버림
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();

  const post = posts.find(p => p.slug === slug);

  return {
    props: {
      slug,
      post,
    },
  };
}
