import React from 'react';
import {
    Dialog,
    DialogTitle,
    Typography
} from '@material-ui/core';

import Apollo from '../../images/apollo.jpg';

function Banner({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle disableTypography>
                <Typography variant="body2">
                    You have been blessed by Apollo the sun dog.
                </Typography>
            </DialogTitle>
            <img src={Apollo} style={{ height: '350px', width: '350px'}} />
        </Dialog>
    )
}

export default Banner;
