import React from 'react';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './Footer.module.scss';
import Link from 'next/link';
import { DownloadIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

const Footer = ({className, style} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <footer className={clsx(styles.wrapper, conditionalClassNames, 'flex max-mobile:flex-col mobile:justify-between gap-5 items-center')} style={style}>
            <Link className='inline-flex gap-2 items-center text-white hover:text-cyan hover:underline transition-colors' href='https://linkedin.com/in/stevenjdent' target='_blank'>
                <LinkedInLogoIcon width={20} height={20} />
                Connect on LinkedIn
            </Link>
            <Link className='inline-flex gap-2 items-center text-white hover:text-cyan hover:underline transition-colors' href='/CV_Steven_James_Dent_UI_Engineer.pdf' download='CV - Steven James Dent - UI Engineer'>
                Download my CV
                <DownloadIcon width={20} height={20} />
            </Link>
        </footer>
    );
};

export default Footer;