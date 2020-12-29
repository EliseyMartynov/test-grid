import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

const columnMockUp = [
  { key: 'type', name: 'Type' },
  { key: 'jan', name: 'January' },
  { key: 'feb', name: 'February' },
  { key: 'mch', name: 'March' },
  { key: 'apr', name: 'April' },
];

const rowMockUp = [{ type: 'Ankle boots', jan: 0, feb: 0, mch: 0, apr: 408 }];

const TableExample = () => {
  return (
    <div>
      <DataGrid
        className="table"
        columns={columnMockUp}
        rows={rowMockUp}
        rowClass={(row) => 'custom'}
        defaultColumnOptions={{
          resizable: true,
        }}
      />
    </div>
  );
};

export default TableExample;
