import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";

import Login from "./Login";

test('renders content', ()=>{
    const component = render(<Login />)

    console.log(component)
})