export default function handleRowsSelection(selectionModel, rows = [{}], setPrintRows) {
    const selectid = [...selectionModel?.ids]
    let selectedRows = (selectid[0]) ? selectid.map(id => rows.find(row => row.id === id)) : rows
    setPrintRows(selectedRows)
    console.log("print row: ", selectedRows)
}