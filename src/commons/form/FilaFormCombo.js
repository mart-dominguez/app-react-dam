import React, { Component}  from 'react';

function FilaFormCombo(props) {
    const tipo = props.tipo? props.tipo : "text";
    const valor = props.valor? props.valor : "";
    return (        
        <div className="form-group">
            <label>Example select</label>
            <div className="select">
                <select className="form-control">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                <i className="form-group__bar"></i>
            </div>
        </div>
    );
}

export default FilaFormCombo;