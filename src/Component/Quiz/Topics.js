import React, { useContext } from 'react';
import { topicsContext } from '../Root/Root';
import QuizCard from './QuizCard';
import TopicsHero from './TopicsHero';

const Topics = () => {
    const topics=useContext(topicsContext)
    const {data}=topics
    return (
        <section>

        <TopicsHero></TopicsHero>
        <div className='grid m-11 gap-4 md:grid-cols-4 sm:gap-4 sm:grid-cols-2 '>
            {
                data.map(topic=><QuizCard key={topic.id} data={topic}></QuizCard>)
            }
        </div>
        </section>
    );
};

export default Topics;