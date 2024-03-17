import React from 'react';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './Hero.module.scss';
import Heading from '../Heading/Heading';
import Image from 'next/image';
import photo from '@/assets/photo.png';
import Button from '../Button/Button';

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

const Hero = ({className, style} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <section>
            <div className={clsx(styles.wrapper, conditionalClassNames)} style={style}>
                <div className={styles.content}>
                    <Heading tag='h1' mega collapse>Full-stack UI Engineer</Heading>
                    <Heading className='max-mobile:hidden' tag='h2' appearance='h5'>Based in the UK, Available for new positions</Heading>
                    <p>
                        I&apos;m Steven, I&apos;m a UI Engineer with <strong>10 years of industry experience</strong>. I pride myself on delivering performant and innovative products with code so clean you could eat off of it - just as long as there&apos;s a <span className='text-cyan'>{'<table>'}</span> in there somewhere.
                    </p>
                    <div className='flex items-center gap-5 mt-8 flex-wrap'>
                        <div className='py-2 px-5 bg-cyan bg-opacity-20 border-solid border-cyan border-s text-nowrap' >Frontend Development</div>
                        <div className='py-2 px-5 bg-green bg-opacity-20 border-solid border-green border-s text-nowrap' >Backend Development</div>
                        <div className='py-2 px-5 bg-red bg-opacity-20 border-solid border-red border-s text-nowrap' >UI Design</div>
                    </div>
                </div>
                <Image className={styles.image} src={photo} alt="Photograph of Steven" />
            </div>
            <div className='flex max-mobile:flex-col justify-center tablet:justify-between px-gutter-small tablet-l:px-gutter laptop:px-gutter-large gap-20 tablet:gap-5 py-5 text-center text-white bg-midnight bg-opacity-90'>
                <div>
                    <Heading tag='span' appearance='h6'>BA (Hons) In Web & Multimedia</Heading>
                    <span className='opacity-80'>First Class Honours</span>
                </div>
                <div className='mobile:hidden tablet:block'>
                    <Heading tag='span' appearance='h6'>10 Years Industry Experience</Heading>
                    <span className='opacity-80'>Frontend, Backend, and Design</span>
                </div>
                <div>
                    <Heading tag='span' appearance='h6'>Experienced JavaScript Developer</Heading>
                    <span className='opacity-80'>React, TypeScript, ES6, NodeJS</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;