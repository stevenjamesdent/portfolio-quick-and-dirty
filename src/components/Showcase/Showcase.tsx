import React from 'react';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './Showcase.module.scss';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

const Showcase = ({className, style} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={clsx(styles.wrapper, conditionalClassNames, 'flex flex-col laptop:flex-row gap-10 mt-10 max-laptop:gutter gutter-small laptop-l:gutter')} style={style}>
            <div className="basis-1/3 rounded-2xl p-8 text-center text-white bg-twilight shadow-2xl">
                <Heading tag='h3' appearance='h5'>Firebase Backend & NodeJS API</Heading>
                <p>
                    A Firebase powered backend to drive the complex business logic of the mobile applications. Using Cloud Firestore (No-SQL DB) and Firebase Cloud Functions I designed and built the backend for SNIPPR from the ground up. The BE is accessed via a NodeJS + ExpressJS REST API which I also designed and built alone.
                </p>
                <Button
                    className='mt-5'
                    href='https://github.com/stevenjamesdent/snippr-backend-sample'
                    target='_blank'
                    title='View Code Sample'
                />
            </div>

            <div className="basis-1/3 rounded-2xl p-8 text-center text-white bg-twilight shadow-2xl">
                <Heading tag='h3' appearance='h5'>React Native Mobile Applications</Heading>
                <p>
                    The two mobile applications which I designed and built for SNIPPR - one for customers and one for hair stylists. The apps are built with React Native + Expo and are currently production ready and available on both iOS and Android. The apps use a variety of SDKs and extensions, however the UIs are completely custom.
                </p>
                <div className="flex justify-center gap-5">
                    <Button
                        className='mt-5'
                        href='https://github.com/stevenjamesdent/snippr-app-sample'
                        target='_blank'
                        title='Code Sample'
                    />
                    <Button
                        className='mt-5'
                        href='https://play.google.com/store/apps/details?id=com.snippr.snipprapp'
                        target='_blank'
                        title='App Store'
                    />
                </div>
            </div>

            <div className="basis-1/3 rounded-2xl p-8 text-center text-white bg-twilight shadow-2xl">
                <Heading tag='h3' appearance='h5'>NextJS Marketing Website</Heading>
                <p>
                    The public facing marketing site for SNIPPR, while relatively small and simple for the MVP. I designed and then built this site in NextJS, which is deployed on Vercel (previously on Azure). The site pulls content from Storyblok via the Storyblok API, content is migrated from staging to production via Github Actions and the Storyblok CLI.
                </p>
                <div className="flex justify-center gap-5">
                    <Button
                        className='mt-5'
                        href='https://github.com/stevenjamesdent/snippr-nextjs'
                        target='_blank'
                        title='Code Sample'
                    />
                    <Button
                        className='mt-5'
                        href='https://snippr.co.uk'
                        target='_blank'
                        title='Live Site'
                    />
                </div>
            </div>
        </div>
    );
};

export default Showcase;