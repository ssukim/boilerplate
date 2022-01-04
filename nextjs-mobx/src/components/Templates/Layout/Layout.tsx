import React from 'react';

import Footer from '../../Organisms/Footer';
import Meta from '../Meta';

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />
            <div>
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
