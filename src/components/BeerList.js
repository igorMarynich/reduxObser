import React from 'react';

export default function BeerList(props) {
    const {beers, status } = props;
    console.log('props', props);
    return (
        <div>
            {status === 'pending' && (
                <p>Please wait...</p>
            )}
            {status === 'success' && (
                <div>
                    <p>Got {beers.length} coin(s)</p>
                </div>
            )}
        </div>
    )
}
