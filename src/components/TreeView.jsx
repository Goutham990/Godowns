import React, { useState, useEffect } from 'react';
import './TreeView.css';

const TreeView = ({ onSelectItem }) => {
    const [godowns, setGodowns] = useState([]);

    useEffect(() => {
        fetch('/api/godowns')
            .then(response => response.json())
            .then(data => setGodowns(data));
    }, []);

    const handleItemClick = (item) => {
        onSelectItem(item);
    };

    const renderTree = (node) => (
        <ul>
            <li className="tree-item" onClick={() => handleItemClick(node)}>
                {node.name}
            </li>
            {node.subLocations && node.subLocations.map(subNode => (
                <li key={subNode.id} className="sub-location">
                    {renderTree(subNode)}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="treeview">
            {godowns.map(godown => (
                <div key={godown.id}>{renderTree(godown)}</div>
            ))}
        </div>
    );
};

export default TreeView;
