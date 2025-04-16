import React from "react";

function Section(props){

    const {copyright, year} = props;
    return(

        <footer>
            <p>@ {copyright} PropsState || {year} </p>
        </footer>

        
    )
}

export default Section;
