import React from "react";

type c_view =   {
    path: string;
    component: React.LazyExoticComponent<any>,
    showNav: boolean,
    footer: boolean,
}

export const VIEWS: Array<c_view>