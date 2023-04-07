import * as React from 'react';
import useStyles from './statusAccountStyles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate, useLocation } from 'react-router-dom';
import { currentUser, changeUser } from 'redux/slice/userSlice';
import { useSelector, useDispatch } from 'react-redux';

import { UserStor } from 'redux/store';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StatusAccount: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const name = useSelector((state: UserStor) => state.nameUser);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const { classes } = useStyles();
    return (
        <div className={classes.fieldsContainer}>
            <div className={classes.title}>{name.name + '   היי  '}</div>
            <div>
                <Button
                    onClick={handleClickOpen}
                    className={classes.btnDelete}
                    variant="contained"
                >
                    מחק חשבון
                </Button>
                <Button
                    onClick={navigateToHome}
                    className={classes.btnDisconect}
                    variant="contained"
                >
                    התנתקות
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle className={classes.ExitAccountTitle}>
                        {' ?האם אתה בטוח שאתה רוצה למחוק את החשבון'}
                    </DialogTitle>

                    <DialogContentText
                        className={classes.ExitAccountHeader}
                        id="alert-dialog-slide-description"
                    >
                        ...במידה ותלחץ החשבון ימחק
                    </DialogContentText>

                    <DialogActions className={classes.ExitAccountContent}>
                        <Button
                            onClick={handleClose}
                            className={classes.ExitBtn}
                        >
                            לא
                        </Button>
                        <Button
                            className={classes.ExitBtn}
                            onClick={() => {
                                handleClose();
                                navigateToHome();
                            }}
                        >
                            כן
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};
export default StatusAccount;
