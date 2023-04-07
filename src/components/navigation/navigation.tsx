import React, { useState } from 'react';
import useStyles from './navigationStyles';
import logo from 'svg/spotify.svg';
import StatusAccount from 'components/statusAccount/statusAccount';
import Sliders from 'components/slider/slider';
import ButtonsMenu from 'components/buttomsMenu/buttonsMenu';
import { Outlet } from 'react-router-dom';
import MyLottieAnimation from 'components/lottie/lottieLogo';

enum UrlRoutes {
    landingPage = 'landingPage',
    songs = 'songs',
    playlist = 'playlist',
    favorites = 'favorites',
}

const Navigation: React.FC = () => {
    const { classes } = useStyles();
    const [showDiv, setShowDiv] = useState<boolean>(false);

    return (
        <div className={classes.fieldsContainer}>
            <div className={classes.header}>
                <div className={classes.titleContainer}>
                    <StatusAccount></StatusAccount>
                    <MyLottieAnimation></MyLottieAnimation>

                    <div className={classes.logoContainer}>
                        <img
                            className={classes.logo}
                            src={logo}
                            alt="Your SVG"
                        />
                        <div>musify </div>
                    </div>
                </div>
            </div>
            <div className={classes.navigation}>
                <div className={classes.tableValuse}>
                    <Outlet />
                </div>
                <div className={classes.buttonsContainer}>
                    <ButtonsMenu />
                </div>
            </div>

            <Sliders />
        </div>
    );
};

export default Navigation;
