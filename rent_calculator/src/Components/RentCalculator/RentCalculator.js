import React, {Component} from 'react';
import '../../App.css';
import ChoreTable from '../ChoreTable';
import{defaultChores,initialRent,initialReduction,smallColumn,largeColumn} from '../../Constants';

class RentCalculator extends Component{
    constructor(props){
        super(props);
        this.state ={
            chores: defaultChores,
            rent:initialRent,
            reductions: initialReduction,
            total: initialRent,
        };
        this.setFrequency = this.setFrequency.bind(this);
        this.calculateReduction = this.calculateReduction.bind(this);
        this.getTotalRent = this.getTotalRent.bind(this);
    }


    setFrequency(event, choreName){

        this.setState( (prevState) => ({
            chores: prevState.chores.map((chore) => {
                if(chore.name === choreName){
                    if(event.target.value <= chore.maxFrequency) {
                        this.calculateReduction();
                        this.getTotalRent();
                        return {
                            ...chore,
                            frequency: event.target.value
                        }
                    }
                    this.calculateReduction();
                    this.getTotalRent();
                    return {
                        ...chore,
                        frequency: chore.maxFrequency
                    };

                }
                return chore;
            })
        }));
        event.preventDefault();
    }

    calculateReduction(){
        this.setState((state)=> {
            let reductions = 0;
            state.chores.forEach((chore) => {
                reductions += chore.cost * chore.frequency;
            });
            return {
                reductions
            }
        })
    }

    getTotalRent(){
        this.setState((state)=>{
            let total= state.rent - state.reductions;
            return{
                total
            }
        })
    }

    render() {
        console.log(this.state.chores);
        return (
            <div className="page">
                <div className="interactions">
                    <div className="table-header">
                    <span style= {smallColumn}>
                         Task
                    </span>
                        <span style={smallColumn}>
                        Value
                    </span>
                        <span style={largeColumn}>
                        Frequency (Per Month)
                    </span>
                    </div>
                    <ChoreTable
                        choreList = {this.state.chores}
                        setFrequency = {this.setFrequency}
                    >
                    </ChoreTable>
                    <span>
                  <div className="table-result">
                    Total Reductions {this.state.reductions}$
                  </div>
                  <div className="table-result">
                      Total Rent (After Reductions) {this.state.total}$
                  </div>
                </span>
                </div>
            </div>

        );
    }
}

export default RentCalculator;