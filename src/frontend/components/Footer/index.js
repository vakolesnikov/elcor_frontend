import React from 'react';
import styles from './index.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles['main-footer']}>
                <div className={styles.social}>
                    <a
                        href="https://vk.com/elcor58"
                        className={`${styles['social-item']} ${styles['social-vk']}`}
                    />
                    <a
                        href="https://instagram.com/elcor58"
                        className={`${styles['social-item']} ${styles['social-insta']}`}
                    />
                </div>
                <div className={styles['social-box']}>
                    <span className={styles['social-title']}>Давайте дружить, это выгодно!</span>
                    <span className={styles['social-text']}>
                        Скидка до 10% для друзей из социальных сетей
                    </span>
                </div>
                <div className={styles['product-by']}>
                    developed by <a href="https://vk.com/v.a.kolesnikov">v.kolesnikov</a>
                </div>
            </footer>
        </div>
    );
}
