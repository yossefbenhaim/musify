import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './loginStyles';
import { Button, MenuItem, Typography } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { changeUser } from 'redux/slice/userSlice';
import { useDispatch } from 'react-redux';
import Lottie from 'lottie-web';
import MyLottieAnimation from 'components/lottie/lottieLogo';

interface User {
    id: string;
    firstName: string;
    lastName: string;
}

const GET_USERS = gql`
    query MyQuery {
        allUsers {
            nodes {
                firstName
                lastName
                id
            }
        }
    }
`;

const Login: React.FC = () => {
    const { classes } = useStyles();
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedUserId(event.target.value as string);
        dispatch(changeUser(event.target.value));
    };

    useQuery(GET_USERS, {
        onCompleted: (data) => {
            setUsers(data.allUsers.nodes);
        },
    });
    const homeNavigation = () => {
        if (selectedUserId) {
            navigate('firstPage');
        }
    };

    return (
        <>
            <div className={classes.lottieStyle}>
                <MyLottieAnimation />
            </div>
            <div className={classes.fieldsContainer}>
                <Typography className={classes.title}>Musify</Typography>
                <Box>
                    <FormControl className={classes.menu} fullWidth>
                        <InputLabel
                            className={classes.titleMenu}
                            id="demo-simple-select-label"
                        >
                            בחר משתמש להתחברות
                        </InputLabel>
                        <Select
                            // open
                            className={classes.select}
                            value={selectedUserId}
                            label="בחר משתמש להתחברות"
                            onChange={handleChange}
                        >
                            {users.map((user) => {
                                return (
                                    <MenuItem
                                        key={user.id}
                                        value={
                                            user.firstName + ' ' + user.lastName
                                        }
                                    >
                                        {user.firstName}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Button
                    onClick={homeNavigation}
                    className={classes.btn}
                    variant="contained"
                >
                    התחבר
                </Button>
            </div>
        </>
    );
};

export default Login;

// const dispatch = useDispatch();

// const handleChangeUser = (user: string) => {
// 	dispatch(changeUser(user));
// };

// const handleCurrentUser = () => {
// 	dispatch(currentUser());
// };
