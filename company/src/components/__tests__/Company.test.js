import React from "react";

import { render, screen } from '@testing-library/react';
import Company from "../Company";
describe('Company Component', () => {
    it("Should render company component", () => {
        render(<Company />);
        screen.debug();
    })

})