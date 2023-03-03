import React, {FC, useEffect} from 'react';

import { useParams} from "react-router-dom";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {selectAlbums, getAlbums} from "./albumsSlice";
import {IAlbums} from "./types";

export const Albums: FC = () => {
    const {userId} = useParams();
    const albums = useAppSelector(selectAlbums);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let load = false
        if (!load && userId) {
            dispatch(getAlbums(+userId))
        }

        return() => {
            load = true;
        }
    }, [dispatch, userId])

    return (
        <div>
            Page Albums
            <br/>
            <br/>
            <br/>
            <ul>
                {albums.length > 0 && albums.map((album: IAlbums) => (
                    <li key={album.id}>
                        <p>{album.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};
