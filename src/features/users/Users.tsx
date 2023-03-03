import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {getAllUsers, selectUsers} from "./usersSlice";
import {IUser} from "./types";

export const Users: FC = () => {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let load = false
        if (!load) {
            dispatch(getAllUsers())
        }

        return() => {
            load = true;
        }
    }, [dispatch])

    return (
        <div>
            <ul>
                {users.length > 0 && users.map((user: IUser) => (
                    <li key={user.id}>
                        <Link to={`/${user.id}/albums`}>User Albums</Link>
                        {' '}
                        <Link to={`/${user.id}/posts`}>User Posts</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
