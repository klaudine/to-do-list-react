import React, { useState } from "react";

const Table = () => {
    const [expandRows, setExpandRows] = useState([]);

    const onAddItem = () => {
        setExpandRows([...expandRows, { id: Math.random().toString(36).substring(7), text: "New Item" }]);
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                {expandRows.map((row,index) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.text}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export default Table;