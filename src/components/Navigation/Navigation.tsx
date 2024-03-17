'use client'

import { HTMLAttributeAnchorTarget, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import clsx from 'clsx';
import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import logo from '@/assets/brand.svg';
// import { useRouter } from 'next/router'

import styles from './Navigation.module.scss';

import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Offcanvas from '../Offcanvas/Offcanvas';
import { useCallback } from 'react';
import Image from 'next/image';

export interface Props {
    className?: string,
    style?: React.CSSProperties,
    items?: {
        active?: boolean,
        href: string,
        target?: HTMLAttributeAnchorTarget,
        title: string,
    }[],
    cta?: {
        href: string,
        target: HTMLAttributeAnchorTarget,
        title: string,
    },
}

const Navigation = ({ className, style, items, cta } : Props): React.ReactElement => {
    const [banner_exists, set_banner_exists] = useState(true);
    const [offcanvas_active, set_offcanvas_active] = useState(false);
    const [navbar_height, set_navbar_height] = useState(0);
    const [navbar_solid, set_navbar_solid] = useState(false);

    const class_names = classNames(className, {
        [styles.navbar_solid]: navbar_solid || !banner_exists,
    });

    // const router = useRouter();
    // const nav_items = items?.map((item) => ({
    //     active: router.asPath?.replace(/\//g, '') === item.href?.replace(/\//g, '')
    // })) as typeof items ?? [];

    // useEffect(() => {
    //     // @ts-ignore
    //     set_banner_exists(document.querySelector('[data-banner]') ?? false);
    //     handle_scroll();
    //     set_offcanvas_active(false);
    // }, [router.asPath]);

    useEffect(() => {
        window.addEventListener("scroll", handle_scroll);
        return () => window.removeEventListener("scroll", handle_scroll);
    }, []);

    const update_height = (height: number) => {
        document.documentElement.style.setProperty('--navbar-height', `${height ?? 0}px`);
        set_navbar_height(height);
    }

    const handle_scroll = () => {
        set_navbar_solid(window.scrollY > 1);
    }

    // @ts-ignore
    const navbar_ref = useCallback(node => {
        if (!node) return;
        const resize_observer = new ResizeObserver(() => update_height(node.offsetHeight));
        resize_observer.observe(node);
    }, []);

    return (
        <>
            <header ref={navbar_ref} className={clsx(class_names, styles.navbar)} style={style}>
                <Link href='/'>
                    <Image className='max-mobile:max-w-[275px]' src={logo} alt="Steven James Dent - UI Engineer" />
                </Link>
                <nav className={styles.menu}>
                    <ul>
                        {
                            items?.map((item, i) => (
                                <li key={'nav-item-' + i}>
                                    <Link
                                        className={clsx(styles.link, item.active && styles.link_active, 'flex')}
                                        href={item.href}
                                        target={item.target}
                                        title={item.title}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <nav className='max-laptop:ml-auto flex gap-10'>
                    {
                        cta ?
                            <Link
                                className={clsx(styles.link, styles.cta, 'max-mobile:hidden')}
                                href={cta.href}
                                target={cta.target}
                                title={cta.title}
                            >{cta.title}</Link>
                        : null
                    }

                    <Button
                        className='laptop:!hidden'
                        onClick={() => set_offcanvas_active(true)}
                        title='Open Menu'
                        unstyled
                    >
                        <HamburgerMenuIcon className='text-white' width={30} height={30} />
                    </Button>
                </nav>
            </header>

            <Offcanvas active={offcanvas_active} onDismiss={() => set_offcanvas_active(false)}>
                <Menu spaced>
                    {
                        items?.map((item, i) => (
                            <Menu.Item
                                active={item.active}
                                href={item.href}
                                key={'menu-item-' + i}
                                onClick={() => set_offcanvas_active(false)}
                                target={item.target}
                                title={item.title}
                            />
                        ))
                    }
                </Menu>
            </Offcanvas>
        </>
    );
};

export default Navigation;