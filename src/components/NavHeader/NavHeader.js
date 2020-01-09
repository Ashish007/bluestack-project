import React from 'react';
import ReactDOM from 'react-dom';
import styles from './NavHeader.scss';

export default class NavHeader extends React.Component {
    constructor(props){
        super(props);
    }
    highlight(e){
        var tagLength = document.getElementsByTagName(e.target.tagName).length; 
        for(var i=0; i<tagLength; i++){
            document.getElementsByTagName(e.target.tagName)[i].style=null;
        }
        document.getElementById(e.target.id).style.color="rgb(129, 216, 129)";
        document.getElementById(e.target.id).style.borderBottom="5px solid rgb(129, 216, 129)";
    }
    render() {
        return <nav onClick={this.highlight} className={styles.container}>
            <h4 id="uc">Upcoming Campaigns</h4>
            <h4 id="lc">Live Campaigns</h4>
            <h4 id="pc">Past Campaigns</h4>
        </nav>
    }
}