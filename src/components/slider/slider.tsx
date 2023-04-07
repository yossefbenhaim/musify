import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

import { Typography } from '@mui/material';

import Slider from '@mui/material/Slider';

import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useStyles from './sliderStyles';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector } from 'react-redux';
import { statusSlider } from 'redux/store';
import formatDuration from 'utils/formatDuration';

const Sliderr: React.FC = () => {
    const { classes } = useStyles();
    const duration = 90; // seconds
    const status = useSelector((state: statusSlider) => state.statusSlider);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        let interval: any = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime((currentTime) => currentTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleClickPlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleSliderChange = (newValue: number) => {
        setCurrentTime(newValue);
    };
    const icon = (
        <div className={classes.sliderContainer}>
            <div className={classes.playContainer}>
                <div className={classes.playSong}>
                    <IconButton className={classes.sizeIcon}>
                        <SkipPreviousIcon className={classes.sizeSvg} />
                    </IconButton>
                    <IconButton
                        className={classes.sizeIcon}
                        onClick={handleClickPlay}
                    >
                        {isPlaying ? (
                            <PlayArrowIcon className={classes.sizeSvg} />
                        ) : (
                            <PauseIcon className={classes.sizeSvg} />
                        )}
                    </IconButton>
                    <IconButton className={classes.sizeIcon}>
                        <SkipNextIcon className={classes.sizeSvg} />
                    </IconButton>
                </div>
                <div className={classes.titleSong}>
                    <div className={classes.artistSize}>שם השיר</div>
                    <div>שם האומן</div>
                </div>
            </div>

            <Slider
                className={classes.slider}
                size="small"
                value={currentTime}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => handleSliderChange(value as number)}
            />
            <div className={classes.songTime}>
                <Typography className={classes.tinyText}>
                    {formatDuration(currentTime)}
                </Typography>
                <Typography className={classes.tinyText}>
                    {formatDuration(duration - currentTime)}
                </Typography>
            </div>
        </div>
    );
    return (
        <div className={classes.slide}>
            <Slide direction="up" in={status.status}>
                {icon}
            </Slide>
        </div>
    );
};

export default Sliderr;
