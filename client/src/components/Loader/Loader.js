import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#000',
  },
}));

export default function Loader({ show }) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={show}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
