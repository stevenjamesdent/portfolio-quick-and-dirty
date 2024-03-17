import React from 'react';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './TEMPLATE.module.scss';

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

const TEMPLATE = ({className, style} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={clsx(styles.wrapper, conditionalClassNames)} style={style}>

        </div>
    );
};

export default TEMPLATE;