import React from 'react';

import Footer from '../../Organisms/Footer';
import Alert from '../../Organisms/Alert';
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
                <Alert />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
