import React, {FC, useEffect} from 'react';

import { useParams} from "react-router-dom";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {selectPosts, getPosts} from "./postsSlice";
import {IPosts} from "./types";

export const Posts: FC = () => {
    const {userId} = useParams();
    const posts = useAppSelector(selectPosts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let load = false
        if (!load && userId) {
            dispatch(getPosts(+userId))
        }

        return() => {
            load = true;
        }
    }, [dispatch, userId])

    return (
        <div>
            Page Posts
            <br/>
            <br/>
            <br/>
            <ul>
                {posts.length > 0 && posts.map((post: IPosts) => (
                    <li key={post.id}>
                        <p><b>title:</b> {post.title}</p>
                        <p><b>body:</b> {post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};
