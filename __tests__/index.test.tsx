import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import CalculatorInput from '@/components/CalculatorInput';
describe("Home", () => {
  it("renders a calculator heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js calculator!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("CalculatorInput", ()=>{
  it("reders the input of the calculator", () => {
    render(<CalculatorInput />)

    const input = screen.getByTestId("input")

    expect(input).toBeInTheDocument();
  })
})