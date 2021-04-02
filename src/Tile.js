import React from 'react';

function Tile(props) {

    return (
        <>
        <div className='col-3 border border-dark'>{props.tile.number === 0 ? '': props.tile.number}</div>
        </>
    );
}

export default Tile;