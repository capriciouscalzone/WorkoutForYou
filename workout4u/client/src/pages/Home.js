import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Workout from './Workout';

import { QUERY_THOUGHTS, QUERY_WORKOUT } from '../utils/queries';


const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS, QUERY_WORKOUT);
  const thoughts = data?.thoughts || [];
  const workout = data?.workout || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >

          <Workout 
            workout={workout}
            title="Try this workout"
          
          />

          
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Find some motivation today..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;