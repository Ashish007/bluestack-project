import React from 'react';
import ReactDOM from 'react-dom';
import styles from './DataTable.scss';

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [{
                "name": "Test Whatsapp",
                "region": "US",
                "createdOn": 1559807714999,
                "price": "Price info of Test Whatsapp",
                "csv": "Some CSV link for Whatsapp",
                "report": "Some report link for Whatsapp",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Super Jewels Quest",
                "region": "CA, FR",
                "createdOn": 1559806715124,
                "price": "Price info of Super Jewels Quest",
                "csv": "Some CSV link for Super Jewels Quest",
                "report": "Some report link for Super Jewels Ques",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mole Slayer",
                "region": "FR",
                "createdOn": 1559806711124,
                "price": "Price info of Mole Slayer",
                "csv": "Some CSV link for Mole Slayer",
                "report": "Some report link for Mole Slayer",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix",
                "region": "JP",
                "createdOn": 1559806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            }
            ]
        }
    }
    render() {
        return <div className={styles.container}>
            <ul className={styles.container__headername}>
                <li>DATE</li>
                <li>CAMPAIGN</li>
                <li>VIEW</li>
                <li>ACTION</li>
            </ul>
            <div className={styles.container__columns}>
                {/* columns of table */}
                {this.state.data.map(data => {
                    return <ul className={styles.container__headername}>
                        <li>{data.createdOn}</li>
                        <li>{data.name}</li>
                        <li>{data.price}</li>
                        <li>{data.csv+' '}{data.report+' '}{data.region}</li>
                    </ul>
                })}

            </div>
        </div>
    }
}