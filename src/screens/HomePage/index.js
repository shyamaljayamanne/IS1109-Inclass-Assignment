import React from 'react';
import './index.css';

function HomePage() {
    return (
        <div className="home-page">
            <h1 className="title is-1">This is the HomePage</h1>

            {/* Q4: Style this h4 tag with Bulma CSS helper classes to be an actual h4 tag. */}
            <h4>This is an inclass assignment</h4>

            {/* Q5: There are 2 ways to add prop (properties) to a React Component. 
                Make this component (HomePage component) accept props with the destructured method. 
                Add the following props: title, subtitle, description.    
            */}
                
            
        </div>
    );
}

export default HomePage;