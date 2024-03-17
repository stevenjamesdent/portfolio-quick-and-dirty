import classNames from 'classnames';
import clsx from 'clsx';
import React from 'react';
import styles from './Heading.module.scss';

export interface Props {
    appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    center?: boolean,
    children?: React.ReactNode,
    className?: string,
    collapse?: boolean,
    giga?: boolean,
    mega?: boolean,
    style?: React.CSSProperties,
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
}

const Heading = ({
    appearance,
    center,
    children,
    className,
    collapse,
    giga,
    mega,
    style,
    tag = 'h2',
}: Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {
        [styles['heading_' + tag]]: !appearance,
        [styles['heading_' + appearance]]: appearance,
        [styles.heading_giga]: giga,
        [styles.heading_mega]: mega,
        [styles.heading_center]: center,
        [styles.heading_collapse]: collapse,
    });

    const Tag = tag;

    return (
        <Tag data-testid='heading' className={clsx(styles.heading, conditionalClassNames)} style={style}>
            <div className={className}>
                {children}
            </div>
        </Tag>
    );
};

export default Heading;