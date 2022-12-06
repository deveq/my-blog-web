import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home(...props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <h1>Blog Home</h1>
    </div>
  );
}

// getStaticProps 이름은 고정
export function getStaticProps() {
  // sanity로부터 데이터를 가져온다.
  return {
    props: {
      hello: 'world',
    },
  };
}
