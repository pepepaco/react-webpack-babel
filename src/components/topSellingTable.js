import React from 'react'
import * as Table from 'reactabular-table'
import * as sort from 'sortabular'
import { compose } from 'redux'
import ToggleSort  from '../containers/toggleSortContainer'

import {
    cloneDeep,
    findIndex,
    orderBy,
    keys,
    values,
    transforms
} from 'lodash';

class AllFeaturesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.dataSource, // initial rows
      sortingColumns:props.sortBy, // reference to the sorting columns
      columns: this.getColumns(), // initial columns
    };

  }
  getColumns() {
    const sortable = sort.sort({
      getSortingColumns: () => this.state.sortingColumns || [],
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumns({ // sort.byColumn would work too
            sortingColumns: this.state.sortingColumns,
            selectedColumn
          })
        });
      }
    });
    const sortableHeader = sortHeader(sortable, () => this.state.sortingColumns);

    return [
       {
        property: 'Id',
        header: {
          label: 'ID',
          formatters: [
            sortableHeader
          ],
          props: {
            style: {
              width: 50
            }
          }
        },
        visible: true
      }, {
        property: 'location',
        header: {
          label: 'Location',
          formatters: [
            sortableHeader
          ],
          props: {
            style: {
              width: 40
            }
          }
        },
        visible: true
      }, {
        property: 'address',
        header: {
          label: 'Address',
          formatters: [
            sortableHeader
          ],
          props: {
            style: {
              width: 40
            }
          }
        },
        visible: true
      }, {
        property: 'transactions',
        header: {
          label: 'Transactions',
          formatters: [
            sortableHeader
          ],
          props: {
            style: {
              width:40
            }
          }
        },
        visible: true
      }, {
        property: 'value',
        header: {
          label: 'Value',
          formatters: [
            sortableHeader
          ],
          props: {
            style: {
              width: 40
            }
          }
        },
        visible: true
      }, {
        property: 'action',
        header: {
          label: 'Action',
          formatters: [
            sortableHeader
          ],
          props: {
            style: {
              width: 40
            }
          }
        },
        visible: true
      },
    ];
  }

  render() {
    const {
      columns, rows, pagination, sortingColumns
    } = this.state;
    const cols = columns.filter(column => column.visible);

   this.state.sortingColumns=this.props.sortBy;  
    console.log(this.props.sortBy);
    const sortedRows = compose(
      sort.sorter({ columns: cols, sortingColumns, sort: orderBy })
    )(rows);

    return (
      <div>

        <Table.Provider
          className="table table-bordered"
          columns={cols}
          style={{ overflowX: 'auto' }}
        >
          <Table.Header>
          </Table.Header>
          <Table.Body rows={sortedRows} rowKey="Id" />
        </Table.Provider>
      </div>
    );
  }
}

function sortHeader(sortable, getSortingColumns) {
  return (value, { columnIndex }) => {
    const sortingColumns = getSortingColumns() || [];
    //console.log(sortingColumns);
    return (
      <div style={{ display: 'inline' }}>
        <span className="value">{value}</span>
        {React.createElement(
          'span',
          sortable(
            value,
            {
              columnIndex
            },
            {
              style: { float: 'right' }
            }
          )
        )}
        {sortingColumns[columnIndex] &&
          <span className="sort-order" style={{ marginLeft: '0.5em', float: 'right' }}>
          </span>
        }
      </div>
    );
  };
}

let  TopSellingTable = props => {
const {isActive,getRows} = props;
    return (
        <div>
		<div className='row p-b-2'>
			
			<div className="col-md-6">
				<div className='pull-right'>
					<ToggleSort defaultSort={'Transactions'}  toggleOptions={[{ id : 1 , name: 'Transactions'}, {id: 2, name:'Value'}]}/>					
				</div>
			</div>
		</div>
		<AllFeaturesTable sortBy={(isActive =='Value'? {4: {direction: 'desc',position: 0}}:{3: {direction: 'desc',position: 0}})} dataSource={getRows} />
	</div>);
}

export default TopSellingTable
