import clsx from 'clsx';
import styles from './Content.module.scss';

export interface Props {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
}

const Content = ({children, className, style}: Props) : React.ReactElement => {    
    return (
        <div className={clsx(styles.content, className)} style={style}>
            {children}
        </div>
    );
};

export default Content;