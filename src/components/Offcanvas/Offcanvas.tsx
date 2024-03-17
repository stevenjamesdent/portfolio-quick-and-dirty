import { PinLeftIcon } from '@radix-ui/react-icons'
import Button from '../Button/Button';
import classNames from 'classnames';
import clsx from 'clsx';
import Divider from '../Divider/Divider';
import Link from 'next/link';
import styles from './Offcanvas.module.scss';
import Image from 'next/image';
import logo from '@/assets/brand.svg';

export interface Props {
    active?: boolean,
    children?: React.ReactNode,
    className?: string,
    onDismiss?: () => void,
    style?: React.CSSProperties,
}

const Offcanvas = ({active, children, className, style, onDismiss}: Props) : React.ReactElement => {
    const class_names = classNames(className, {
        [styles.offcanvas_active]: active,
    });

    return (
        <aside style={style} className={clsx(class_names, styles.offcanvas)}>
            <div className='flex items-center justify-between p-10'>
                <Link href='/'>
                    <Image className='max-mobile:max-w-[275px]' src={logo} alt="Steven James Dent - UI Engineer" />
                </Link>
                <Button title='Dismiss Menu' onClick={onDismiss} unstyled>
                    <PinLeftIcon width={30} height={30} />
                </Button>
            </div>
            <Divider className='mb-10' />
            <div className='px-10'>
                {children}
            </div>
        </aside>
    );
};

export default Offcanvas;