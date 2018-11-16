import React, { Component}  from 'react';

function FilaFormTextArea(props) {
    const tipo = props.tipo? props.tipo : "text";
    const valor = props.valor? props.valor : "";
    return (        
        <div className="form-group">
            <label>Example textarea</label>
            <textarea className="form-control"></textarea>
            <i className="form-group__bar"></i>
        </div>
    );
}

export default FilaFormTextArea;