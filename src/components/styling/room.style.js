import styled from 'styled-components';

export const StyledRoom = styled.div`
    background-color: ${props => {
        if (props.currentRoom) {
            return '#f10808;'
        } else if (props.room.id) {
            return '#92825c'
        } else {
            return '#282c34'
        }
        }};
    width: 17px;
    height: 20px;
    margin: 5px;
    position: relative;
    border-radius: 50%
    z-index: 5
`

export const StyledNorthCon = styled.div`
    position: absolute;
    top: -10px;
    background-color: white;
    width: 7px;
    height: 10px;
    left: 5px;
    display: ${props =>  props.room.n_to ? 'block' : 'none'};
`

export const StyledEastCon = styled.div`
    position: absolute;
    top: 7px;
    background-color: white;
    width: 12px;
    height: 7px;
    left: 17px;
    display: ${props =>  props.room.e_to ? 'block' : 'none'};
`