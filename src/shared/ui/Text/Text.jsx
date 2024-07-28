import React from 'react';
import styles from './Text.module.scss';
import { getStyle } from '../../helper/getStyle';

const Text = ({ type='p', children, size='xs', className}) => {

    const mapTextTag = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        li: 'li',
        figcaption: 'figcaption',
    }

    const TextTag = mapTextTag[type];

    const additional = [
        styles[size],
        className
    ]
  return (
    <TextTag className={getStyle(styles.text, {}, additional)}>
      {children}
    </TextTag>
  )
}

export default Text;