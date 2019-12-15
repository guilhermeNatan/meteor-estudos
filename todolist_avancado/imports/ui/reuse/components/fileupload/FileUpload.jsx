import React from 'react';
import Button from "@material-ui/core/Button";

const FileUpload = ({title, inputProps}) => {
    return (
        <Button
            variant="contained"
            component="label"
        >
            {title}
            <input
                type="file"
                style={{ display: "none" }}
                {...inputProps}
            />
        </Button>
    );
};


export default FileUpload;
