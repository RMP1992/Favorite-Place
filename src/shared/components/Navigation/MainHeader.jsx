import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
 return <header className='main-header'>
     {props.children}
     {/* props children is a placeholder for the code you want to enter in between the opening and closing tags */}
 </header>
}

export default MainHeader;