import React from 'react';
import _ from 'lodash';
import { AnimeHeader } from './components/AnimeHeader';
import { LeftInformation } from './components/LeftInformation';
import { Layout, Spin, Result, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, getAnimeCharacters } from '../../../api/api';
import { useQuery } from 'react-query';

const { Content } = Layout;

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching, data, error } = useQuery(`${idToNumber}`, () => getAnimeData(idToNumber));

  if (isFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (error || !data) {
    console.log(error);
    return <Result status="500" title="500" subTitle={error?.message} />;
  }

  return (
    <Layout style={{ height: '100%' }}>
      <AnimeHeader data={data} />
      <Content>
        <Row gutter={14} justify="center" style={{ marginTop: '15px' }}>
          <LeftInformation data={data} /> {/*Component span={4} */}
          <Col span={12}></Col> {/*Render overview component here */}
        </Row>
      </Content>
    </Layout>
  );
};
