import React from "react";
interface Ibind {
    value: string | number | boolean;
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}
interface IuseInput {
    value: string | number | boolean;
    setValue: ((value: string | number | boolean) => void);
    bind: Ibind;
    reset: (() => void);
}
export declare const useInput: (initialValue: (string | number | boolean)) => IuseInput;
export {};
