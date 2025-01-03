export interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

export interface JsonSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}
