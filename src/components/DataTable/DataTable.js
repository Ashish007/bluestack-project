import React from 'react';
import ReactDOM from 'react-dom';
import styles from './DataTable.scss';

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }    
    }
    
    render() {
        const  {data}  = this.props;
        return <div className={styles.container}>
            <ul>
                <li>DATE</li>
                <li>CAMPAIGN</li>
                <li>VIEW</li>
                <li>ACTION</li>
            </ul>
                {data.map(data => {
                    return <ul key={data.name}>
                        <li>{data.createdOn}</li>
                        <li>{data.name}</li>
                        <li>{data.price}</li>
                        <li>{data.csv+' '}{data.report+' '}{data.region}</li>
                    </ul>
                })}
        </div>
    }
}