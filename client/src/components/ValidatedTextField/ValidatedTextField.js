import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { blueGrey900 } from 'material-ui/styles/colors';

const styles = {
    fieldStyle: {
        width: '100%'
    },
    errorStyle: {
        color: 'red',
        position: 'absolute',
        bottom: '-0.42rem'
    },
    floatingLabel: {
        color: '#48C6EF'
    },
    underlineStyle: {
        borderColor: blueGrey900
    }
};

const ValidatedTextField = ({
    label,
    handleChange,
    value,
    type,
    errorMessage,
    valid
}) => (
    <TextField
        style={styles.fieldStyle}
        floatingLabelText={label}
        hintText={label}
        errorStyle={styles.errorStyle}
        errorText={!valid && errorMessage}
        underlineFocusStyle={styles.underlineStyle}
        onChange={handleChange}
        value={value}
        type={type}
    />
);

ValidatedTextField.propTypes = {
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    errorMessage: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired
};

ValidatedTextField.defaultProps = {
    type: 'text',
    value: ''
};

export default ValidatedTextField;
