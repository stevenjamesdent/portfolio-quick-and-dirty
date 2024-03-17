import Link from 'next/link';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './Menu.module.scss';

import Button from '../Button/Button';
import { HTMLAttributeAnchorTarget } from 'react';

export interface MenuItemProps {
    active?: boolean,
    className?: string,
    cta?: boolean,
    horizontal?: boolean,
    href?: string,
    onClick?: () => void,
    style?: React.CSSProperties,
    target?: HTMLAttributeAnchorTarget,
    title?: string,
}

export interface MenuProps {
    children?: React.ReactNode,
    className?: string,
    horizontal?: boolean,
    spaced?: boolean,
    style?: React.CSSProperties,
}

const Item = ({cta, className, style, target = '_self', title, href, onClick, active}: MenuItemProps) : React.ReactElement => {
    const class_names = classNames(className, {});

    if (cta) return (
        <li style={style} className={clsx(class_names, styles.item)}>
            <Button onClick={onClick} href={href} title={title} target={target} />
        </li>
    );

    if (href) return (
        <li style={style} className={class_names}>
            <Link onClick={onClick} className={clsx(styles.link, active && styles.link_active)} href={href} title={title} target={target}>{title}</Link>
        </li>
    );

    return (
        <li style={style} className={class_names}>
            <Button onClick={onClick} className={clsx(styles.link, active && styles.link_active)} title={title} unstyled>{title}</Button>
        </li>
    );
}

const Menu = ({children, className, horizontal, spaced, style}: MenuProps) : React.ReactElement => {
    const class_names = classNames(styles.menu, {
        [styles.menu_horizontal]: horizontal,
        [styles.menu_spaced]: spaced,
    });

    return (
        <nav className={className} style={style}>
            <ul className={class_names}>
                {children}
            </ul>
        </nav>
    );
};

Menu.Item = Item;

export default Menu;