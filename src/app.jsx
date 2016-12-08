import styles from './index.scss';
import React from 'react';
import  TopSellingTable from  './containers/topSellingTableContainer'

export default class App extends React.Component {
  render() {
    return (
      <div>
      <TopSellingTable/>
      
      </div>
    )
  }
}
