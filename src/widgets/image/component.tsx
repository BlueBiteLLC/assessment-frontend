import React from 'react';
import styles from './styles.module.css';

type ImageProps = {
    options: {
        src: string;
        alt: string;
    },
};

const Image = ({ options }: ImageProps) => (
    <img
        className={styles.image}
        src={options.src}
        alt={options.alt}
    />
);

export default Image;
