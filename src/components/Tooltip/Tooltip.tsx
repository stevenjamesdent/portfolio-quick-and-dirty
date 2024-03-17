import { FloatingPortal, safePolygon, useFloating, useHover, useInteractions, useTransitionStyles } from '@floating-ui/react';
import clsx from 'clsx';
import Link from 'next/link';
import React, { HTMLAttributeAnchorTarget } from 'react';
import styles from './Tooltip.module.scss';

export interface TooltipProps {
    children?: React.ReactNode,
    link?: {
        target: HTMLAttributeAnchorTarget,
        title: string,
        url: string,
    },
    text: string,
}

const Tooltip = ({
    children,
    link,
    text,
} : TooltipProps): React.ReactElement => {
    const [active, setActive] = React.useState(false);

    const {refs, floatingStyles, context} = useFloating({
        open: active,
        onOpenChange: setActive,
    });

    const {isMounted, styles: transitionStyles} = useTransitionStyles(context);

    const hover = useHover(context, {
        delay: {
            close: 300,
            open: 200,
        },
        handleClose: safePolygon(),
    });

    const {getReferenceProps, getFloatingProps} = useInteractions([hover]);

    return (
        <>
            <div className={styles.wrapper} ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>

            {
                active && (
                    <FloatingPortal>
                        <div
                            className={clsx(styles.tooltip, active && styles.active)}
                            ref={refs.setFloating}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            {isMounted &&
                                <div style={transitionStyles}>
                                    {text}
                                    {link &&
                                        <Link
                                            href={link.url}
                                            target={link.target}
                                            title={link.title}
                                            className='block text-green font-bold mt-2 hover:underline'
                                        >
                                            {link.title}
                                        </Link>
                                    }
                                </div>
                            }
                        </div>
                    </FloatingPortal>
                )
            }
        </>
    );
};

export default Tooltip;