import React from 'react';
import styled from 'styled-components';

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
            <main>{children}</main>
        </>
    );
};
export default Layout;
