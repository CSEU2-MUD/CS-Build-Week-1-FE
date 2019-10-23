import React from 'react';
import './styling/buttons.css';
import { connect } from 'react-redux';
import { move } from '../actions/game';

const Button = ({ name, fn, loading }) => {
  return (
    <button className="way-button" name={name} onClick={fn} disabled={loading}>
      {name}
    </button>
  );
};

const Buttons = props => {
  const move = e => {
    const value = e.target.name[0].toLowerCase();
    props.move(value);
  };

  return (
    <div className={`buttons-container border ${props.loading && 'loading'}`}>
      <Button name="North" fn={move} loading={props.loading} />
      <Button name="South" fn={move} loading={props.loading} />
      <Button name="East" fn={move} loading={props.loading} />
      <Button name="West" fn={move} loading={props.loading} />
    </div>
  );
};

export default connect(
  state => ({ loading: state.gameReducer.loading }),
  { move }
)(Buttons);
