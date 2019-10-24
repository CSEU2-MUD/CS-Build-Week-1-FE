import React from 'react';
import { connect } from 'react-redux';
import { move } from '../actions/game';
import { ButtonsContainer, DirectionButton } from './styling/buttons.style';

const Button = ({ name, fn, loading }) => {
  return (
    <DirectionButton name={name} onClick={fn} disabled={loading}>
      {name}
    </DirectionButton>
  );
};

const Buttons = props => {
  const move = e => {
    const value = e.target.name[0].toLowerCase();
    props.move(value);
  };

  return (
    <ButtonsContainer className={`${props.loading && 'loading'}`}>
      <Button name="North" fn={move} loading={props.loading} />
      <Button name="South" fn={move} loading={props.loading} />
      <Button name="East" fn={move} loading={props.loading} />
      <Button name="West" fn={move} loading={props.loading} />
    </ButtonsContainer>
  );
};

export default connect(
  state => ({ loading: state.gameReducer.loading }),
  { move }
)(Buttons);
