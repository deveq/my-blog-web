import { Col, Row } from 'antd';
import React from 'react';

export default function BlogHeadLine() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: 'bold',
          }}
        >
          deveq&#39;s blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          프론트엔드 개발자
        </p>
      </Col>
    </Row>
  );
}
