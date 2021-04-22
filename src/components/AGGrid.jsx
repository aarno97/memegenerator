import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
//default themes
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'
// baltham set
// import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'
// import 'ag-grid-community/dist/styles/ag-theme-balham.css'
// material theme
import 'ag-grid-community/dist/styles/ag-theme-material.css'
// hello

const AGGrid = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Toyota", model: "Pompous", price: 35000},
        {make: "Ford", model: "Arrogant", price: 32000},
        {make: "Porsche", model: "Industrious", price: 72000},
        {make: "Toyota", model: "Glory", price: 35000},
        {make: "Ford", model: "Sam", price: 32000},
        {make: "Porsche", model: "Falcon", price: 72000},
        {make: "Toyota", model: "Winter", price: 35000},
        {make: "Ford", model: "Soldier", price: 32000},
        {make: "Porsche", model: "Chaos", price: 72000},
        {make: "Toyota", model: "Space", price: 35000},
        {make: "Ford", model: "Power", price: 32000},
        {make: "Porsche", model: "Klingon", price: 72000}
    ]);

    const gridOptions = {
        pagination: true,
        paginationAutoPageSize: true,
        onFirstDataRendered: onFirstDataRendered,
        onGridReady: function (params) {
            params.api.sizeColumnsToFit();

            window.addEventListener('resize', function() {
                setTimeout(function() {
                    params.api.sizeColumnsToFit();
                })
            })
        }
    };

    function onFirstDataRendered(params) {
        gridOptions.api.sizeColumnsToFit();
    }

    return (
        <div
            className="ag-theme-material"
            // style={{height: 90vh, width: 1400}}
        >
            <AgGridReact
                // onGridReady={onGridReady}
                rowData={rowData}
                suppressMovableColumns={true}
                gridOptions={gridOptions}
            >
                <AgGridColumn field="make" sortable={true}/>
                <AgGridColumn field="model"/>
                <AgGridColumn field="price"/>
                <AgGridColumn field={"try"}/>
                <AgGridColumn field={"this"}/>
                <AgGridColumn field={"out"}/>
                <AgGridColumn field={"What Happens Now"}/>
            </AgGridReact>
        </div>

    );

}

export default AGGrid;