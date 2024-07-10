import React from 'react';
import {Popover} from "antd";

function CurrentUser() {
    return (
        <>
        <Popover
            placement='bottomRight'
            trigger='click'
            overlayInnerStyle={{padding: 0}}
            overlayStyle={{zIndex:999}}
        >
            test
        </Popover>
        </>
    );
}

export default CurrentUser;