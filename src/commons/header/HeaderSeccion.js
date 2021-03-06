import React, { Component}  from 'react';

function HeaderSeccion(props) {
    return (<header className="content__title">
<h1>Dashboard</h1>
<small>Welcome to the unique Material Design admin web app experience!</small>

<div className="actions">
    <a href="" className="actions__item zmdi zmdi-trending-up"></a>
    <a href="" className="actions__item zmdi zmdi-check-all"></a>

    <div className="dropdown actions__item">
        <i data-toggle="dropdown" className="zmdi zmdi-more-vert"></i>
        <div className="dropdown-menu dropdown-menu-right">
            <a href="" className="dropdown-item">Refresh</a>
            <a href="" className="dropdown-item">Manage Widgets</a>
            <a href="" className="dropdown-item">Settings</a>
        </div>
    </div>
</div>
</header>);
}

export default HeaderSeccion;
