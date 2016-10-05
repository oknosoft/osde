import React, { Component, PropTypes } from 'react';
import classes from './DataField.scss'

import TextField from 'material-ui/TextField';

export default class FieldText extends Component {

  static propTypes = {
    _obj: PropTypes.object.isRequired,
    _fld: PropTypes.string.isRequired,
    _meta: PropTypes.object.isRequired,
    handleValueChange: PropTypes.func
  }


  render() {
    return (

      <div className={classes.row}>
        <div className={classes.celllabel}>{this.props._meta.synonym}</div>
        <div className={classes.celldata}>
          <TextField
            name={this.props._meta.name}
            fullWidth={true}
            defaultValue={this.props._val}
          />
        </div>
      </div>

    );
  }
}
