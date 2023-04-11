import React from "react";
import {createUseStyles} from 'react-jss'
import Input from "../components/Input";

const Home: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper} >
            <Input />
        </div>
    )
}
export default Home

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 50
    }
});