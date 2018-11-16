import React, { Component}  from 'react';

class FilaFormInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //const name = target.name;
        this.props.actualizar(this.props.id,value);
    }
  
    render() {
        const tipo = this.props.tipo? this.props.tipo : "text";
        const valor = this.props.valor? this.props.valor : "";
        return (        
            <div className="col-md-12">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type={tipo} value={valor} id={this.props.id} onChange={this.handleChange} className="form-control"  />
                    <i className="form-group__bar"></i>
                </div>
            </div>    
        );
    }
}

export default FilaFormInput;