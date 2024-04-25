import { render } from "@testing-library/react";
import { axe } from 'jest-axe';
import App from "../src/App";

describe('App', () => {
    it('should render', async () => {
        const { container } = render(<App />)
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    })
})