import React, { useState } from 'react';
import initialData from '../localization.json'

const LocalizationEditor = () => {
    const [data, setData] = useState(initialData);

    // Handle input change
    const handleChange = (value, category, key, subKey, index = -1) => {
        const updatedData = { ...data };
        if (index === -1) {
            updatedData.descriptions[category][key][subKey] = value;
        } else {
            if (value === undefined) {
                updatedData.descriptions[category][key][subKey].pop()
            } else {
                updatedData.descriptions[category][key][subKey][index] = value;
            }
        }
        setData(updatedData);
    };

    // Handle download of the edited JSON file
    const handleDownload = () => {
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "localization.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    console.log(data.descriptions['Blind']['bl_eye'].text.length)

    return (
        <div>
            <h1>Localization Editor</h1>
            {Object.keys(data.descriptions).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    {Object.keys(data.descriptions[category]).map((key) => (
                        <div key={key} style={{ border: 'solid 1px black', paddingLeft: '5px', marginBottom: '10px' }}>
                            <label>
                                Name: 
                                <input
                                    type="text"
                                    value={data.descriptions[category][key].name}
                                    onChange={(e) => handleChange(e.target.value, category, key, 'name')}
                                />
                            </label>
                            <label>
                                Text: 
                                {data.descriptions[category][key].text.map((val, index) => 
                                    <input
                                        type="text"
                                        value={val}
                                        onChange={(e) => handleChange(e.target.value, category, key, 'text', index)}
                                    />
                                )}
                                <button onClick={() => {
                                    handleChange(undefined, category, key, 'text', data.descriptions[category][key].text.length - 1)
                                }} style={{ transform: 'scale(0.8)', marginLeft: 10, marginTop: 0, backgroundColor: 'red' }}>-</button>
                                <button onClick={() => {
                                    handleChange("", category, key, 'text', data.descriptions[category][key].text.length)
                                }} style={{ transform: 'scale(0.8)', marginLeft: 10, marginTop: 0 }}>+</button>
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleDownload}>Download JSON</button>
        </div>
    );
};

export default LocalizationEditor;
