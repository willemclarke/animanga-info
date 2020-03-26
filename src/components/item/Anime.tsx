import React from 'react';
import { Col, Row, Layout, Spin, Result } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, search, getAnimeCharacters, getMangaData } from '../../api/api';
import { useQuery } from 'react-query';

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching, data, error } = useQuery(`${idToNumber}`, () => {
    return getAnimeData(idToNumber);
  });

  if (isFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (error) {
    console.log(error);
    return <Result status="500" title="500" subTitle={error.message} />;
  }

  return <div>{JSON.stringify(data)}</div>;
};
