import React from "react";

function Second(props) {
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
            <h1>{props.children}</h1>
        </React.Fragment>
    )
}