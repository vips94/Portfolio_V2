import { OrbitControls } from '@react-three/drei';
import React from 'react';
import {Earth} from './Earth';

const Experience = () => {

    return (
        <>
            <ambientLight/>
            <pointLight position={[10, 10, 10]} />
            <spotLight intensity={1} position={[20, 20, 20]} />
            <OrbitControls enableZoom={false}/>
            <Earth/>
        </>
    );
};

export default Experience;