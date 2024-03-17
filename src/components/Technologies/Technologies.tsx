import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import clsx from 'clsx';
import Modal from 'react-modal';

import styles from './Technologies.module.scss';
import Heading from '../Heading/Heading';
import Divider from '../Divider/Divider';
import { technologies } from '@/config/technologies';
import Button from '../Button/Button';
import { Cross1Icon } from '@radix-ui/react-icons';

export interface Props {
    active: boolean,
    className?: string,
    onClose: () => void,
    onOpen?: () => void,
    style?: React.CSSProperties,
}

const filters = {
    frontend: true,
    backend: true,
    design: true,
    build: true,
    cicd: true,
    cms: true,
};

const filterLabels = {
    backend: 'Backend Development',
    build: 'Build Tools',
    cicd: 'CI/CD',
    cms: 'CMS',
    design: 'UI Design',
    frontend: 'Frontend Development',
};

const Technologies = ({className, style, active, onClose, onOpen} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    const [activeFilters, setActiveFilters] = useState(filters);

    const handleFilterChange = (filter: keyof typeof filters) => {
        console.log({
            ...filters,
            [filter]: !filters[filter],
        })
        setActiveFilters((current) => ({
            ...current,
            [filter]: !current[filter],
        }));
    }

    const filteredTechnologies = useMemo(() => technologies.filter(
        (technology) => {
            let active = false;

            Object.keys(technology.area).forEach((areaKey) => {
                if (
                    technology.area[areaKey as keyof typeof technology.area] &&
                    activeFilters[areaKey as keyof typeof filters]
                ) {
                    active = true;
                }
            });

            return active;
        }
    ), [activeFilters]);

    return (
        <Modal closeTimeoutMS={250} isOpen={active} onAfterOpen={onOpen} onRequestClose={onClose}>
            <div className={clsx(styles.wrapper, conditionalClassNames, 'p-5 mobile-l:p-10 max-w-[1000px]')} style={style}>
                <div className='flex items-start justify-between'>
                    <Heading tag='span' appearance='h3'>Skills & Technologies</Heading>
                    <Button onClick={onClose} unstyled><Cross1Icon width={25} height={25} /></Button>
                </div>
                <p>Take a look at the key skills and technologies I&apos;ve used throughout my career. Feel free to filter by discipline/area!</p>
                <div className='flex gap-5 items-center flex-wrap mt-5'>
                    {
                        Object.keys(filters).map((filterKey) => {
                            const active = activeFilters[filterKey as keyof typeof filters];

                            return (
                                <button
                                    key={filterKey}
                                    className={clsx(styles.filter, active && styles.filter_active)}
                                    onClick={() => handleFilterChange(filterKey as keyof typeof filters)}
                                >
                                    {filterLabels[filterKey as keyof typeof filters]}
                                </button>
                            );
                        })
                    }
                </div>
                <Divider className='opacity-20 my-8' />
                <div className='flex flex-wrap gap-2'>
                    {
                        filteredTechnologies.map((technology, i) => (
                            <span key={'tech' + i} className={styles.tech}>{technology.name}</span>
                        ))
                    }
                </div>
            </div>
        </Modal>
    );
};

export default Technologies;