import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PreviousTrees.css';

const PreviousTrees = () => {
    const [trees, setTrees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrees = async () => {
            try {
                const response = await axios.get('http://localhost:8080/binary_tree/previous-trees');
                setTrees(response.data);
            } catch (error) {
                console.error('Error fetching previous trees:', error);
            }
        };

        fetchTrees();
    }, []);

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="previous-trees-container">
            <h1 className="previous-trees-title">Previous Trees</h1>
            <ul className="previous-trees-list">
                {trees.map((tree) => (
                    <li key={tree.id}>
                        <strong>Input Numbers:</strong> {tree.inputNumbers}
                        <br />
                        <strong>Tree Structure:</strong>
                        <pre className="tree-structure">{tree.treeStructure}</pre>
                    </li>
                ))}
            </ul>
            <div className="back-button-container">
                <button className="back-button" onClick={handleBack}>Back to Input</button>
            </div>
        </div>
    );
};

export default PreviousTrees;