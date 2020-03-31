import React from 'react';
import _ from 'lodash';
import { AnimeScoreData } from '../../../api/api';
import { Col, Row, Card } from 'antd';

interface StatusProps {
  data: AnimeScoreData;
}

export const StatusDistribution = (props: StatusProps) => {
  const { data } = props;
  const { watching, completed, dropped, on_hold, plan_to_watch } = data;

  return (
    <Row gutter={[30, 12]} style={{ width: '100%' }}>
      <div>
        <h3>Status Distribution</h3>
      </div>
      <Card
        bordered={false}
        style={{ width: '100%' }}
        bodyStyle={{
          display: 'flex',
          alignItems: 'side-by-side',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Col span={5}>
          <Card
            title="Completed"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#68D639', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${completed} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Plan to Watch"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#02A9FF', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${plan_to_watch} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Currently Watching"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#9256F4', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${watching} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="On Hold"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#F779A4', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${on_hold} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Dropped"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#E85D75', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${dropped} users`}</Card>
        </Col>
      </Card>
    </Row>
  );
};
