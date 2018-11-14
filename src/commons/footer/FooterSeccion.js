import React, { Component}  from 'react';

function FooterSeccion(props) {
    return (
                <footer className="footer hidden-xs-down">
                <p>© Material Admin Responsive. All rights reserved.</p>

                <ul className="nav footer__nav">
                    <a className="nav-link" href="">Homepage</a>

                    <a className="nav-link" href="">Company</a>

                    <a className="nav-link" href="">Support</a>

                    <a className="nav-link" href="">News</a>

                    <a className="nav-link" href="">Contacts</a>
                </ul>
            </footer>
);
}

export default FooterSeccion;