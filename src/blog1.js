import React from 'react';
import logo from './blog1.jpg';

import './blog.css';

const blog1 = () => {
    return (
        <div className="Main1">

            <div className="Blog1">
                <h2>The Manga Revue: I Am a Hero</h2>
                <h5>June 4, 2016</h5>
                <img src={logo} className="App-logo1" alt="logo" />

                <p>At first glance, I Am a Hero looks like a Walking Dead clone, complete with gun-toting vigilantes and hungry zombie hordes.
                 Peel back its gory surface, however, and it becomes clear that I Am a Hero is really a meditation on being trapped: by a dead-end
                  job, by thwarted expectations, and by fears, real and imagined.

                The “hero” of Kengo Hanazawa’s series is thirty-five-year old Hideo Suzuki. Though Hideo tasted success with the publication of his 
                own manga, his triumph was short-lived: Uncut Penis was cancelled just two volumes into its run. He now toils as a mangaka’s assistant, working alongside other middle-aged artists whose professional disappointment has curdled into misogyny and grandiosity.
                
                Compounding Hideo’s problems is his fragile mental state. He hallucinates, talks to himself, and barricades the door to his apartment
                 against an unspecified threat, in thrall to the voices in his head. Despite his tenuous grasp on reality, Hideo is the only one of his
                  co-workers who notices the small but telling signs that something is deeply amiss in Tokyo. Hideo soon realizes that his long-standing
                  
                  fears might actually be justified, and must decide whether to hunker down or flee the city.
                
                Getting to Hideo’s do-or-die moment, however,
                 may be a challenge for some readers. The first act of I Am a Hero is a tough slog: not only does it focus on a cluster of
                  strenuously unpleasant characters, it documents their daily routines in painstaking detail. The tedium of these early chapters
                   is occasionally punctuated by vivid, unexplained imagery that calls into question whether the zombies exist or are a figment of
                    Hideo’s imagination.</p>
            </div>

        </div>
    );
}

export default blog1;