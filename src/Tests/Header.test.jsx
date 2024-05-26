import { describe, expect, test } from "vitest";
import Header from "../Components/Header/Header";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header Component", () => {
    test("render header", () => {
        const { container } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});