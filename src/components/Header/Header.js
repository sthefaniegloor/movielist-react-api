import React from 'react'
import { Link } from 'react-router-dom'
import './Header_style.css'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:active {
        text-decoration: none;
        color: white;
    }
`



const Header = ({ handleSearch }) => {
  return (
    <header>
        <nav>
            <StyledLink to='/'> <h2> Search Movies </h2> </StyledLink>
            <div className='input_movie'>
                <input
                    className='input_search'
                    placeholder='Search the movie'
                    onChange={handleSearch}
                />
            </div>
        </nav>
    </header>
  );
};

export default Header