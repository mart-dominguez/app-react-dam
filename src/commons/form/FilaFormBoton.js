import React, { Component}  from 'react';

function FilaFormBoton(props) {
    return (        
        <div className="col-md-12">
            <div className="form-group">
                <button type="button" className="btn btn-light" onClick={props.accion}>Guardar</button>
            </div>
        </div>    
    );
}

export default FilaFormBoton;
