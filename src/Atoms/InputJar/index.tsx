import React, { forwardRef } from "react";

interface InputJarProps {
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    name: string;
    rules?: Record<string, any>; // Optional 'rules' prop
}

const InputJar = forwardRef<HTMLInputElement, InputJarProps>(function InputJar(
    { value, onChange, onBlur, name, rules },
    ref
) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}  
            {...rules}
            placeholder="Enter your first name"
        />
    );
});

export default InputJar;