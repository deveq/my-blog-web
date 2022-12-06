import { Col, Row } from 'antd';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import SanityService from '../services/SanityService';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';

// Post의 내용 중 custom type의 경우 어떤 컴포넌트로 렌더링할지에 대한 map
const serializers = {
  types: {
    code: ({ node }) => {
      const { code } = node;
      return (
        <ReactSyntaxHighlighter language="javascript">
          {code}
        </ReactSyntaxHighlighter>
      );
    },
    video: () => {
      return <p>video</p>;
    },
    imageGallery: () => {
      return <p>imageGallery</p>;
    },
    link: () => {
      return <p>link</p>;
    },
  },
};

export default function BlogPostDetail({ blocks }) {
  return (
    <Row>
      <Col span={24}>
        {/* Post의 내용물을 렌더링해줌 */}
        <BlockContent
          blocks={blocks}
          projectId={process.env.SANITY_PROJECT_ID}
          dataset={'production'}
          // custom으로 만든 type을 매칭
          serializers={serializers}
        />
      </Col>
    </Row>
  );
}
