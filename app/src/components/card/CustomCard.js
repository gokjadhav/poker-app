import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    },
}));

function CustomCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={() => props.click(props.name)}>
            <Avatar variant="rounded" className={classes.rounded}>{props.name}</Avatar>
        </div>
    );
}

export default CustomCard;
