import React, { useState } from "react";

interface Ibind {
    value: string | number | boolean,
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void)
}

interface IuseInput {
    value: string | number | boolean,
    setValue: ((value: string | number | boolean) => void),
    bind: Ibind,
    reset: (() => void)
}

export const useInput = (initialValue: (string | number | boolean)): IuseInput => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(undefined),
        bind: {
            value,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.currentTarget.value);
            }
        }
    };
};
