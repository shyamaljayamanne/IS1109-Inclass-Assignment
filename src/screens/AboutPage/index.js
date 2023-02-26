
//Q6: Import Use State from React. Modify the following line.
import React from 'react';

import './index.css';

function AboutPage() {

    //Q7: Create a state variable called "counter" and set the initial value to 0.
    //Hint: Use the useState hook and create a getter and a setter.


    function increaseCounter(){
        //Q8: Add 1 to the counter value and set it to the variable.
        //Hint: Use the setter function.

    }


    return (
        <div className="about-page">
            <h1 className="title is-1">About Us Page</h1>

            {/* Q9: Display the counter value here. */}
            {/* Hint: Use the getter function. */}
            <h1 className="title is-4">The Count is: </h1>

            <button className="button is-link" onClick={increaseCounter}>Increase Count</button>


            {/* Q10: Change the background color of the About Us Page to green. */}

        </div>
    );
}

export default AboutPage;