import React from 'react'
import { useHistory } from "react-router-dom";

import LogoAnimado from '../components/LogoAnimado'

const AnimationLoader = () => {
    const history = useHistory();

    setTimeout(() => {
        history.push("/signin");
      }, 6000);
    
    return(
        <LogoAnimado />
        )
    }

export default AnimationLoader;

