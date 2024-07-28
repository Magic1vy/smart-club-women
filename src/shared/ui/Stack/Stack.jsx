import { getStyle } from "../../helper/getStyle";
import styles from './Stack.module.scss';

export const Stack = ({
    children,
    className,
    direction = 'column',
    justify,
    align,
    gap,
    max,
    ...otherProps
}) => {

    const mapGap = {
        10: 'gap10',
        20: 'gap20',
        30: 'gap30',
    };

    const mode = {
        [styles.max]: max
    };

    const additional = [
        className,
        styles[direction],
        styles[justify],
        styles[align],
        gap && styles[mapGap[gap]],
    ];

    return (
        <div
            className={getStyle(styles.flex, mode, additional)}
            {...otherProps}
        >
            {children}
        </div>
    );
};