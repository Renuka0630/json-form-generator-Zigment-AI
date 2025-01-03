// App.tsx

import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import FormPreview from './components/FormPreview';
import { JsonSchema } from './types/types';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<JsonSchema>({
    formTitle: '',
    formDescription: '',
    fields: [],
  });

  const handleJsonChange = (newSchema: JsonSchema) => {
    setJsonSchema(newSchema);
  };

  return (
    <div className="App container mx-auto p-4">
      <div className="split-screen flex flex-col md:flex-row">
        {/* JSON Editor */}
        <div className="editor w-full md:w-1/2 p-4">
          <JsonEditor onJsonChange={handleJsonChange} />
        </div>

        {/* Form Preview */}
        <div className="preview w-full md:w-1/2 p-4">
          <FormPreview fields={jsonSchema.fields} />
        </div>
      </div>
    </div>
  );
};

export default App;
