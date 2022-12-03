import React, { useState } from 'react';

import PackageContext from "./Contexts/context";

const Provider = props =>
{
    const [ cart, setCart ] = useState(0);

    return (
        <PackageContext.Provider
            value={ {

                data: cart,
                isUpdateCart: () =>
                {
                    if (cart === 0) {
                        setCart(cart + 1);
                    }
                    console.log(cart);
                },
            } }>
            { props.children }
        </PackageContext.Provider>
    );
};

export default Provider;
