import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';

export default function BlogMainPost({
  slug,
  thumbnail,
  title,
  subtitle,
  author,
  createdAt,
}) {
  return (
    <Row align="middle">
      <Col
        span={24}
        style={{
          height: 'auto',
        }}
      >
        <Link href={`/post/${slug}`}>
          <Card
            style={{
              border: 'none',
            }}
            cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}
          >
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h4>
              {author.name} | {dayjs(createdAt).format('YYYY. MM. D')}
            </h4>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}
