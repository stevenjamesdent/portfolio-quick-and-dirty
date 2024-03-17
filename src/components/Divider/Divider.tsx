import classNames from 'classnames';
import clsx from 'clsx';
import styles from './Divider.module.scss';

export interface Props {
    className?: string,
    style?: React.CSSProperties,
    vertical?: boolean,
}

const Divider = ({style, className, vertical}: Props) : React.ReactElement => {
    const class_names = classNames(className, {
        [styles.divider_vertical]: vertical,
    });

    return <hr className={clsx(class_names, styles.divider)} style={style} />;
};

export default Divider;