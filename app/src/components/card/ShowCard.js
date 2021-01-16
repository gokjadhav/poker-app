import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ShowCard(props) {
    const { open, setOpen, cardValue } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogContent>
                <div maxWidth="xs">
                    {cardValue}
                </div>
            </DialogContent>
        </Dialog>
    );
}