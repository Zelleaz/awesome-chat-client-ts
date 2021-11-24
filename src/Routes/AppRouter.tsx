import React from 'react';
import {useTypedSelector} from "../Hooks/useTypedSelector";
import PrivateRoutes from "./Private/PrivateRoutes";
import PublicRoutes from "./Public/PublicRoutes";

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.user)

    return (
        <>
            {
                isAuth ? <PrivateRoutes /> : <PublicRoutes />
            }
        </>
    );
};

export default AppRouter;