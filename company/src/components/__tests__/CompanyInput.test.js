import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CompanyInput from "../CompanyInput";

describe("CompanyInput Component", ()=> {
    it("Should render value in input", () => {
        render(<CompanyInput />);
        const inputElement = screen.getByPlaceholderText("00000123..");
        fireEvent.change(inputElement, {target: {value: "0000013306"}})
        expect(inputElement.value).toBe("0000013306")

    })
})