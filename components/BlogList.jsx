import { Card, Col, Row } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

export default function BlogList({ posts }) {
  return (
    <>
      <Row align="middle" style={{ height: 100 }}>
        <Col span={24}>
          <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>Latest Posts</h1>
        </Col>
      </Row>
      <Row
        gutter={16}
        align="top"
        style={{
          height: 'auto',
        }}
      >
        {posts.map(post => (
          <Col key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <Card
                style={{
                  width: '100%',
                  border: 'none',
                  marginBottom: 30,
                }}
                cover={
                  <img alt={post.thumbnail.alt} src={post.thumbnail.imageUrl} />
                }
              >
                <h3>{post.title}</h3>
                <h4>
                  {post.author.name} |{' '}
                  {dayjs(post.createdAt).format('YYYY. MM. D')}
                </h4>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
