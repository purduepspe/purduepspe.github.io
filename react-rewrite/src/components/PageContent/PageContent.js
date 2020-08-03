import React from 'react'
import './style.PageContent.css';

function PageContent(props) {
    return (
        <div className="main-content">
            {props.children}
        </div>
    )
}

export default PageContent
