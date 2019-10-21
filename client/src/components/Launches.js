import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.error(error);

  return (
    <Fragment>
      <h1 className='display-4 my-3'>Launches</h1>
      <Fragment>
        {data.launches.map(launch => (
          <LaunchItem launch={launch} key={launch.flight_number} />
        ))}
      </Fragment>
    </Fragment>
  );
};

export default Launches;
