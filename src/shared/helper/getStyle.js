export const getStyle = (style, mode, additional) => {
    const modStyles = Object.entries(mode)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key)

    return [style, ...modStyles, ...additional].join(' ');
};