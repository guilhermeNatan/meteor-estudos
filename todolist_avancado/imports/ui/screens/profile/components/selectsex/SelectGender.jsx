import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './style';

const SelectGender = ({handleChange, ...props}) => {
    return (
            <>
                <InputLabel id="demo-simple-select-helper-label">Gênero</InputLabel>
                <Select
                    style={styles.select}
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    onChange={handleChange}
                    { ...props}
                >
                    <MenuItem value={'M'}>Masculino</MenuItem>
                    <MenuItem value={'F'}>Feminino</MenuItem>
                </Select>
            </>
    );
};


export default SelectGender;
