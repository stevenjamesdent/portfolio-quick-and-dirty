'use client'

import React, { useState } from 'react';
import classNames from 'classnames';
import clsx from 'clsx';

import styles from './Career.module.scss';
import Heading from '../Heading/Heading';
import Menu from '../Menu/Menu';
import Divider from '../Divider/Divider';
import { EmploymentPosition, career } from '@/config/career';
import Button from '../Button/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

const careerIds = career.map((role) => role.id);

const Career = ({className, style} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    const [activePosition, setActivePosition] = useState(career[0].id);

    const handleNext = () => {
        const currentKey = career.findIndex((position) => activePosition === position.id);

        if (activePosition === career.slice(-1)[0].id) {
            setActivePosition(career[0].id);
        } else {
            setActivePosition(career[currentKey + 1].id);
        }
    }

    const handlePrevious = () => {
        const currentKey = career.findIndex((position) => activePosition === position.id);

        if (activePosition === career[0].id) {
            setActivePosition(career.slice(-1)[0].id);
        } else {
            setActivePosition(career[currentKey - 1].id);
        }
    }

    return (
        <section className={clsx(styles.wrapper, conditionalClassNames, 'section bg-twilight')} style={style}>
            <div className="gutter-small tablet:gutter laptop-l:gutter-large text-white">
                <Heading collapse center tag='h2' appearance='h4'>My Career So Far</Heading>

                <Menu className='text-center mb-5 max-mobile-l:hidden' horizontal>
                    {
                        career.map((position: EmploymentPosition) => (
                            <Menu.Item
                                active={activePosition === position.id}
                                onClick={() => setActivePosition(position.id)}
                                title={position.company}
                            />
                        ))
                    }
                </Menu>
                
                <div className='mobile-l:hidden my-5 flex gap-10 items-center justify-between'>
                    <Button onClick={handlePrevious} title='Previous Role'><ChevronLeftIcon width={25} height={25} /></Button>
                    <Heading collapse center tag='span' appearance='h6'>
                        {career.find((position) => activePosition === position.id)!.company}
                    </Heading>
                    <Button onClick={handleNext} title='Next Role'><ChevronRightIcon width={25} height={25} /></Button>
                </div>

                <Divider className='opacity-20' />

                {
                    career.map((position: EmploymentPosition) => (
                        <div className={`${activePosition === position.id ? 'flex' : 'hidden'} max-laptop:flex-col mt-10 gap-10 laptop:gap-20`}>
                            <div className='laptop:basis-4/6'>
                                <Heading tag='h3' appearance='h5'>{position.role} at {position.company}</Heading>
                                <div className='text-cyan'>{position.startYear} - {position.endYear}, {position.location}</div>
                                <p className='my-5'>{position.description}</p>
                                <Heading tag='h4' appearance='h6'>Responsibilities</Heading>
                                <ul>{position.responsibilities.map((item) => (<li>{item}</li>))}</ul>
                            </div>
                            <div className="laptop:basis-2/6 bg-midnight rounded-2xl p-8">
                                <Heading tag='span' appearance='h6' collapse>Notable Technologies</Heading>
                                <Divider className='my-5 opacity-20' />
                                <ul className="flex flex-wrap gap-3">
                                    {
                                        position.technologies.map((item) => (
                                            <li className="px-2 rounded-sm bg-red bg-opacity-40">{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Career;