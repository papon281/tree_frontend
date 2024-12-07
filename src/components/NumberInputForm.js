import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NumberInputForm.css";

export const NumberInputForm = () => {
    const initialValues = {
        numbers: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (name, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const updatedFormData = { ...formValues };
                const response = await axios.post(
                    "http://localhost:8080/binary_tree/process-numbers", updatedFormData
                );
                // Navigate to the new page and pass the tree data via state
                navigate("/tree-display", { state: { tree: response.data } });
            } catch (error) {
                console.error("Error processing numbers:", error);
                alert("An error occurred while processing the numbers. Please try again.");
            }
        }
    };

    const validate = (values) => {
        const errors = {};
        if (!values.numbers) {
            errors.numbers = "Numbers are required";
        } else if (!/^\d+(,\d+)*$/.test(values.numbers)) {
            errors.numbers = "Please enter a valid comma-separated list of numbers";
        }
        return errors;
    };

    return (
        <div className="number-form-container">
            <h1 className="number-form-title">Binary Search Tree Generator</h1>
            <form className="number-form" onSubmit={handleSubmit}>
                <div className="number-field">
                    <label className="number-field-label">Enter numbers (comma-separated):</label>
                    <input
                        type="text"
                        name="numbers"
                        placeholder="e.g., 10,20,30"
                        value={formValues.numbers}
                        onChange={(e) => handleChange("numbers", e.target.value)}
                        className="number-input"
                    />
                    {formErrors.numbers && (
                        <p className="number-error-message">{formErrors.numbers}</p>
                    )}
                </div>
                <div className="number-submit-button-container">
                    <button className="number-submit" type="submit">
                        Generate Tree
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NumberInputForm;