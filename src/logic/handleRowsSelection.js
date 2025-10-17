export default function handleRowsSelection(selectionModel, rows=[{}], setPrintRows){
    const selectedRows = rows.filter((row)=>selectionModel?.ids.has(row.id))
    setPrintRows(prev=>[...prev, selectedRows])
}