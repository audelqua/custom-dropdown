import React from "react";
import {createUseStyles} from 'react-jss'

import Input from "../components/Input";


const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        justifyContent: "center",
    }
  })

const Home = () => {
    const classes = useStyles()

    return (
        <div 
        className={classes.wrapper}

        >
            <Input />
        </div>
    )
}

export default Home
