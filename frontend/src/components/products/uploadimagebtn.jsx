import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
export default function UploadButton() {

    return (
        <form>
            <Button variant="contained" color="primary" component="span"
                startIcon={<CloudUploadIcon />}
            >
                Upload image
            </Button>
        </form>
    );

}