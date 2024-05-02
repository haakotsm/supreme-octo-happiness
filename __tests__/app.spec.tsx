import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from 'jest-axe';

import App from "../src/pages/App";

export const formLabels = {
    location: "Stedsnavn",
    date: "Dato",
    submit: "Hent været",
};

describe('App', () => {
    it('should have no accessibility violations', async () => {
        const { container } = render(<App />)
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    })

    it("should render with dark mode", async () => {
        const { baseElement } = render(<App />, {
            baseElement: document.documentElement,
            container: document.body,
        })
        expect(baseElement.classList).toContain('dark-mode')
    })

    it("should have light mode switch", async () => {
        render(<App />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toBeInTheDocument();

    })

    it("should switch to light mode", async () => {
        const user = userEvent.setup();
        const { baseElement } = render(<App />, {
            baseElement: document.documentElement,
            container: document.body,
        })

        const checkbox = screen.getByRole("checkbox");

        await user.click(checkbox);

        expect(baseElement.classList).not.toContain('dark-mode')
    })


    it("should validate form on submit", async () => {
        render(<App />);

        const locationInput = screen.getByLabelText(formLabels.location);
        const dateInput = screen.getByLabelText(formLabels.date);
        const submitButton = screen.getByRole("button", { name: formLabels.submit });

        await userEvent.type(locationInput, "not a location");
        await userEvent.type(dateInput, "not a date");
        await userEvent.click(submitButton);

        expect(screen.getByText("Ingen værdata funnet")).toBeInTheDocument();
    })

    it("should submit form with correct input", async () => {
        render(<App />);

        const locationInput = screen.getByLabelText(formLabels.location);
        const dateInput = screen.getByLabelText(formLabels.date);
        const submitButton = screen.getByRole("button", { name: formLabels.submit });

        await userEvent.type(locationInput, "Oslo");
        await userEvent.type(dateInput, "2024-04-26");
        await userEvent.click(submitButton);

        expect(screen.getByText("Oslo")).toBeInTheDocument();
    })

    it("should get all weather data from Oslo when location is Oslo", async () => {
        render(<App />);

        const locationInput = screen.getByLabelText(formLabels.location);
        const submitButton = screen.getByRole("button", { name: formLabels.submit });

        await userEvent.type(locationInput, "Oslo");
        await userEvent.click(submitButton);

        const allOsloRecords = screen.getAllByText("Oslo");
        expect(allOsloRecords.length).toBe(10);
    })



})