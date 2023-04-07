import React from 'react';
import Button from '@mui/material/Button';
import useStyles from './buttonsMenuStyles';
import { useNavigate, useLocation } from 'react-router-dom';

const MENU_BTN = [
    { item: 'שירים', path: 'songs', color: '', id: 1 },
    { item: 'פלייליסטים', path: 'playlist', color: '', id: 2 },
    { item: 'מועדפים', path: 'favorites', color: '', id: 3 },
];

const ButtonsMenu: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { classes, cx } = useStyles();

    const homeNavigation = (path: string) => {
        navigate(path);
    };

    const changeNoteColor = (path: string) => {
        MENU_BTN.map((btn) => (btn.path !== path ? (btn.color = 'green') : {}));
    };
    return (
        <div className={classes.btnContainer}>
            {MENU_BTN.map((btn) => (
                <Button
                    key={btn.id}
                    variant="contained"
                    className={cx(classes.btnMenu, {
                        [classes.activeBtn]:
                            '/firstPage/' + btn.path === location.pathname,
                    })}
                    onClick={() => {
                        homeNavigation(btn.path);
                    }}
                >
                    {btn.item}
                </Button>
            ))}
        </div>
    );
};

export default ButtonsMenu;
