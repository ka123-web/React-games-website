import React from 'react';
//styled and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../Actions/detailsAction';

const Game = ({name, released,image,id}) =>
{
  
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () =>{
    dispatch(loadDetail(id));

  }
    return(
        <StyledGame onClick = {loadDetailHandler}>
            <h1>{name}</h1>
            <p> {released}</p>
            <img src={image} alt="name of the game"/>
        </StyledGame>
    )
}
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;