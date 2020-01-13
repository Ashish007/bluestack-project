import React from 'react';
import ReactDOM from 'react-dom';
import styles from './NavHeader.scss';
import DataTable from '../DataTable/DataTable';

export default class NavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaignId: "uc",
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
            },
            {
                "name": "Mancala Mix 1",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 2",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 3",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 4",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 5",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 6",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 7",
                "region": "JP",
                "createdOn": 1599806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 8",
                "region": "JP",
                "createdOn": 1598648571842,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            },
            {
                "name": "Mancala Mix 9",
                "region": "JP",
                "createdOn": 1578648571842,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url": "Some image url of the campaign"
            }
            ],
            "filteredData": []
        }
    }
    filterCampaign = (data, id, arr, sa) => {
        console.log("id>>>", sa);
        return data.createdOn > new Date().getTime();
    }
    highlight = (e) => {
        var tagLength = document.getElementsByTagName(e.target.tagName).length;
        for (var i = 0; i < tagLength; i++) {
            document.getElementsByTagName(e.target.tagName)[i].style = null;
        }
        document.getElementById(e.target.id).style.color = "rgb(129, 216, 129)";
        document.getElementById(e.target.id).style.borderBottom = "5px solid rgb(129, 216, 129)";
        let data = this.state.data;
        let id = e.target.id;
        let filteredData = data.filter(function (data) {
            console.log(id);
            if (id == "uc") {
                console.log("ucucucuucu");
                return data.createdOn > new Date().getTime();
            }
            else if (id == "pc") {
                console.log("pcpcppcpc");
                return data.createdOn < new Date().getTime();
            }
            else {
                return data.createdOn == new Date().getTime();
            }
        });
        this.setState({ filteredData: filteredData });
    }
    componentDidMount() {
        document.getElementById("uc").style.color = "rgb(129, 216, 129)";
        document.getElementById("uc").style.borderBottom = "5px solid rgb(129, 216, 129)";
        let data = this.state.data;
        let filteredData = data.filter(function (data) {
                return data.createdOn > new Date().getTime();
        });
        this.setState({ filteredData: filteredData });
    }
    render() {
        return <div>
            <nav id="navbar" onClick={this.highlight} className={styles.container}>
                <h4 id="uc">Upcoming Campaigns</h4>
                <h4 id="lc">Live Campaigns</h4>
                <h4 id="pc">Past Campaigns</h4>
            </nav>
            <DataTable campaignId={this.state.campaignId} data={this.state.filteredData} />
        </div>


    }
}