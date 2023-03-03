import React, {FC} from 'react';

import {Outlet, Link} from "react-router-dom";

export const Pages: FC = () => {
    return (
        <>
            <div className="App-top">
                <Link to={'/'}>Go Home</Link>
            </div>
            <Outlet />
        </>
    )
};
