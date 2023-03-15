import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { changeUser, currentUser } from 'components/store';

interface User {
    name: string;
}

const Connection: React.FC = () => {
    const count = useSelector((state: User) => state.name);
    const dispatch = useDispatch();

    return <div></div>;
};

export default Connection;
