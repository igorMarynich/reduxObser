import React from 'react';
import {connect} from 'react-redux';
import BeerList from '../components/BeerList';
import {fetchData} from '../reducers/beersActions';

export function Beers(props) {
    const {data, status, fetchData} = props;
    console.log('props', props);
    return (
        <div>
            <div className="App-inputs">
                <button type="button" onClick={fetchData} disabled={status === 'pending'}>
                    Fetch Beers!
                </button>
                {status === 'pending' && (
                    <span className="App-spinner">
                        <img src={"/ajax-loader.gif"} alt=""/>>
                    </span>
                )}
            </div>
            {status === 'success' && (
                <div className="App-content">
                    <BeerList beers={data} status={status}/>
                </div>
            )}
        </div>
    )
}

export default connect(state => state.beers, {fetchData})(Beers);