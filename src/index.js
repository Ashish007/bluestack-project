import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';
import styles from './index.scss';
import Header from './components/Header/Header';
import NavHeader from './components/NavHeader/NavHeader';
import DataTable from './components/DataTable/DataTable';

const Index = () => {
    return  <>
            <Banner />
            <Header />
            <NavHeader />
           </>;
};
ReactDOM.render(<Index />, document.getElementById("index"));