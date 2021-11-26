import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import { color } from 'highcharts'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function MyTable() {

    const mydata = [];

    const columns = React.useMemo(
        () => [
            {
                Header: 'Companies',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'Name',
                    },
                    {
                        Header: 'Description',
                        accessor: 'Description',
                    },
                    {
                        Header: 'Address',
                        accessor: 'Address',
                    },
                    {
                        Header: 'Dividend yield',
                        accessor: 'Dividend yield',
                    },
                    {
                        Header: 'Market Capitalization',
                        accessor: 'Market Capitalization',
                    },
                ],
            },
        ],
        []
    )

    //Fetch APPLE data
    fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=I0R8K64CG3EHARV6')
        .then(res => res.json()).then((items) => {
            mydata.push(items);
        }).catch(console.log)

    //Fetch IBM data
    fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=I0R8K64CG3EHARV6')
        .then(res => res.json()).then((items) => {
            mydata.push(items);
        }).catch(console.log)

    //Fetch MICROSOFT data
    fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=MSFT&apikey=I0R8K64CG3EHARV6')
        .then(res => res.json()).then((items) => {
            mydata.push(items);
        }).catch(console.log)

        console.log(mydata)

    const data = React.useMemo(() => mydata, []);

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default MyTable
