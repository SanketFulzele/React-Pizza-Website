import React from 'react';
import MultiplePizzas from "../assets/aboutPizza.jpg";
import "../styles/About.css";

function About() {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
            </div>
            <div className="aboutBottom">
                <h1> About Us</h1>
                <p>
                    The Pizza Joint was established in 1996 in Augusta, GA. From our humble beginnings
                    we believed that quality is the key to insuring our guests return satisfied. It is
                    that very principle why we feel it is imperative to make our food fresh to order.
                    The Pizza Joint uses the freshest ingredients, we hand slice our vegetables and our
                    dough is made fresh from scratch every day. We mix our pizza sauce and marinara daily.
                    The Pizza Joint specializes in pizzas, strombolis, calzones, oven baked sandwiches
                    cooked on a traditional brick oven. We also offer a variety of salads and appetizers.
                    We have a unique atmosphere built out with eclectic design that creates a warm and
                    inviting environment. Each location has a full bar with nightly specials. It was always
                    our objective to provide an atmosphere that would bring friends and families together
                    by creating an exceptional experience and a positive impact on the community.
                </p>
            </div>
        </div>
    );
}

export default About;
