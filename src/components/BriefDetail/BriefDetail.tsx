import React from 'react';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './BriefDetail.module.scss';

export interface Props {
    active: boolean,
    brief: React.ReactNode,
    className?: string,
    detail: React.ReactNode,
    style?: React.CSSProperties,
}

const BriefDetail = ({className, style, brief, detail, active} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={clsx(styles.wrapper, conditionalClassNames)} style={style}>
            <div className={active ? 'hidden' : undefined}>
                {brief}
            </div>
            <div className={active ? undefined : 'hidden'}>
                {detail}
            </div>
        </div>
    );
};

export default BriefDetail;