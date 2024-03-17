import Link from 'next/link';
import classNames from 'classnames';

import styles from './Button.module.scss';
import { HTMLAttributeAnchorTarget } from 'react';
import clsx from 'clsx';

export interface Props {
    children?: React.ReactNode,
    className?: string,
    disabled?: boolean,
    href?: string,
    onClick?: () => void,
    shadow?: boolean,
    small?: boolean,
    style?: React.CSSProperties,
    submit?: boolean,
    target?: HTMLAttributeAnchorTarget,
    theme?: 'primary' | 'secondary' | 'tertiary',
    title?: string,
    unstyled?: boolean,
}

const Button = ({
    children,
    className,
    disabled,
    href,
    onClick,
    shadow,
    small,
    style,
    submit,
    target,
    theme = 'primary',
    title,
    unstyled,
}: Props) : React.ReactElement => {
    const conditionalClassNames = classNames(className, {
        [styles['button_' + theme]]: theme,
        [styles.button_unstyled]: unstyled,
        [styles.button_shadowed]: shadow,
        [styles.button_small]: small,
    });

    if (href) return (
        <Link onClick={onClick} className={clsx(styles.button, conditionalClassNames)} href={href} title={title} target={target}>{children ?? title}</Link>
    )

    return (
        <button type={submit ? 'submit' : 'button'} disabled={disabled} className={clsx(styles.button, conditionalClassNames)} style={style} title={title} onClick={disabled ? undefined : onClick}>
            {children ?? title}
        </button>
    );
};

export default Button;