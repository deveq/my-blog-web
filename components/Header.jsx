import React from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import { CodeOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <Row align={'middle'} style={{ height: 64 }}>
      <Col span={24}>
        <Link href="/">
          <div
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            <CodeOutlined /> deveq&#39;s Blog
          </div>
        </Link>
      </Col>
    </Row>
  );
}
