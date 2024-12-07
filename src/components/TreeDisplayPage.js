import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TreeDisplayPage.css";

const TreeDisplayPage = () => {
    const { state } = useLocation(); // Get the tree data passed via navigate state
    const navigate = useNavigate();
    const tree = state?.tree;

    if (!tree) {
        return <div>No tree data available</div>;
    }

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="tree-display-page">
            <h1 className="tree-display-title">Generated Tree</h1>
            <p><strong>Input Numbers:</strong> {tree.inputNumbers}</p>
            <pre className="tree-display">
                <strong>Tree Structure:</strong> {tree.treeStructure}
            </pre>
            <div className="back-button">
                <button className="back" onClick={handleBack}>Back to Input</button>
            </div>
        </div>
        
    );
};

export default TreeDisplayPage;