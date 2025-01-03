import React from 'react';
import { Controller, useForm } from 'react-hook-form';

type FormField = {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

type FormPreviewProps = {
  fields: FormField[];
};

const FormPreview: React.FC<FormPreviewProps> = ({ fields }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col">
          <label htmlFor={field.id} className="mb-2 font-medium">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'text' || field.type === 'email' || field.type === 'textarea' ? (
            <Controller
              name={field.id}
              control={control}
              defaultValue=""
              rules={{ required: field.required }}
              render={({ field: controllerField }) => (
                <>
                  <input
                    {...controllerField}
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={`w-full p-2 border rounded-lg ${errors[field.id] ? 'border-red-500' : 'border-gray-300'} `}
                  />
                  {errors[field.id] && <p className="text-red-500 text-sm mt-1">{field.label} is required</p>}
                </>
              )}
            />
          ) : field.type === 'select' ? (
            <Controller
              name={field.id}
              control={control}
              defaultValue=""
              rules={{ required: field.required }}
              render={({ field: controllerField }) => (
                <>
                  <select
                    {...controllerField}
                    id={field.id}
                    className={`w-full p-2 border rounded-lg ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.id] && <p className="text-red-500 text-sm mt-1">{field.label} is required</p>}
                </>
              )}
            />
          ) : field.type === 'radio' ? (
            <div className="flex flex-col">
              {field.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Controller
                    name={field.id}
                    control={control}
                    defaultValue=""
                    rules={{ required: field.required }}
                    render={({ field: controllerField }) => (
                      <input
                        {...controllerField}
                        type="radio"
                        value={option.value}
                        className="mr-2"
                      />
                    )}
                  />
                  <label>{option.label}</label>
                </div>
              ))}
              {errors[field.id] && <p className="text-red-500 text-sm mt-1">{field.label} is required</p>}
            </div>
          ) : null}
        </div>
      ))}
      <div className="mt-4">
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default FormPreview;
