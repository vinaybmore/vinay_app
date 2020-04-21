import React from 'react';
import logo from './blog1.jpg';
import logo1 from './blog2.jpg';
import logo2 from './blog3.png';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

import './Main.css';
import blog1 from './blog1.js';
import blog2 from './blog2.js';
import blog3 from './blog3.js';

const Main = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => {

                    return (
                        <div className="Main">
                            <table className="table">
                                <td>
                                    <div className="Blog">
                                        <h2><Link to={{ pathname: '/blog1' }}>The Manga Revue: I Am a Hero</Link></h2>

                                        <h5>June 4, 2016</h5>
                                        <img src={logo} className="App-logo" alt="logo" />

                                        <p>
                                            At first glance, I Am a Hero looks like a Walking Dead clone, complete
                                            with gun-toting vigilantes and hungry zombie hordes...
                </p>
                                    </div>
                                </td>

                                <td>
                                    <div className="Blog">
                                        <h2><Link to={{ pathname: '/blog2' }}> Positive Lessons from the Coronavirus Crisis</Link></h2>

                                        <h5>11/21/2019</h5>
                                        <img src={logo1} className="App-logo" alt="logo" />

                                        <p>
                                            The world is facing challenging times of crisis. Closed borders and travel bans, quarantine,
                                            shortage of food supply, scary news, and much fear...
                                        </p>

                                    </div>
                                </td>

                                <td>
                                    <div className="Blog">
                                        <h2><Link to={{ pathname: '/blog3' }}>
                                            Tiny Buddha
                                        When Someone I Respected Violated My Trust… </Link></h2>

                                        <h5>11/19/2019</h5>
                                        <img src={logo2} className="App-logo" alt="logo" />

                                        <p>Though I appeared pretty high-functioning and what you might call “normal” as a kid,
                                         I was a ball of self-doubt and insecur.......</p>
                                    </div>
                                </td>



                            </table>
                        </div>

                    );
                }} />

                <Route exact path='/blog1' component={blog1} />
                <Route exact path='/blog2' component={blog2} />
                <Route exact path='/blog3' component={blog3} />

            </Switch>
        </Router>
    );
}

export default Main;