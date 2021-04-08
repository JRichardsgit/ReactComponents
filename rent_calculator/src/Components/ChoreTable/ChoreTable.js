import React from 'react';
import Frequency from '../Frequency';
import '../../App.css';
import {mediumColumn,largeColumn} from '../../Constants';

const ChoreTable = ({setFrequency, choreList}) =>
    <div className="table">
        {choreList.map( chore =>
            <div key = {chore.name} className="table-row">
                <span style={mediumColumn}> {chore.name}</span>
                <span style={mediumColumn}> {chore.cost}$</span>
                <span style={largeColumn}>
            <Frequency
                onChange = { (event) => {
                    console.log(event);
                    setFrequency(event, chore.name) }
                }
                value={chore.frequency}
            >
                Max  {chore.maxFrequency}
            </Frequency>
            </span>
            </div>
        )}
    </div>

export default ChoreTable;
