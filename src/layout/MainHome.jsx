import React from 'react'

import SocialMedia from '../components/SocialMedia';
import Comments from '../components/Comments'
import CreditCards from "../components/CreditCards";
import Categories from "../components/Categories";


const Main = () => {
    return (
        <div>
          
       {/*    <CardList />
            <CardList2 /> */}
            <Categories />
            <SocialMedia />
            <Comments />
            <CreditCards />
        </div>
    );
};

export default Main;
