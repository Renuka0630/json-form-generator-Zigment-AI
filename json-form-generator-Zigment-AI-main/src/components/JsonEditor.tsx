// JsonEditor.tsx

import React, { useState } from 'react';
import { JsonSchema } from '../types/types';
import ReactJson from 'react-json-view';

interface JsonEditorProps {
  onJsonChange: (newSchema: JsonSchema) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onJsonChange }) => {
  const [jsonValue, setJsonValue] = useState<string>(''); // Keeps the JSON string
  const [error, setError] = useState<string>(''); // Keeps the error message

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonValue(value);

    try {
      const parsedJson = JSON.parse(value);
      onJsonChange(parsedJson); // Pass the parsed JSON to the parent
      setError('');
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="json-editor">
      <h2 className="text-xl font-bold mb-4">JSON Editor</h2>
      <textarea
        value={jsonValue}
        onChange={handleChange}
        className="w-full h-64 p-2 border border-gray-300 rounded-md"
        placeholder="Enter your JSON schema here"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonEditor;
