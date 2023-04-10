import {lazy} from "react";

export const MainPageAsync = lazy(() => {
    // @ts-ignore
    return import('./MainPage');
})
