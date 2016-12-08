import { connect } from 'react-redux'
import TopSellingTable from '../components/topSellingTable'


const locations = ['Home', 'Office', 'Town Hall', 'Outside', '1st floor']

function getRows () {
  var rows=[];
   for (var index = 0; index <10; index++) {
      rows.push({
        Id: Math.floor((Math.random() * 10000)),
        location: Math.floor((Math.random() * 100000000)),
        address: locations[Math.floor(Math.random() * 5) + 1],
        transactions:Math.floor((Math.random() * 100)),
        value:'€'+Math.floor((Math.random() * 10)),
        action: 'View',        
    });
    }
  return rows;
}

const mapStateToProps = (state) => ({
  isActive: state.toggleApp.name,
  getRows:getRows()
})

export default connect(
    mapStateToProps
)(TopSellingTable)