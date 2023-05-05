import React from 'react';

const HeaderLinkElement = ({linkName, setIsActive, className}) => {

return (
    <li>
        <a className={`link ${className}`}  
        href={`#${linkName.split(' ')[0].toLowerCase()}`}
        onClick={(e) => setIsActive(e.target.innerHTML)}>
            {linkName}
            </a>
        </li>
    )
}

export default HeaderLinkElement;