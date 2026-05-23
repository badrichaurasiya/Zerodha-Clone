import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";  

// Test Suite
describe("Hero Component", () => {
  // Test Case 1: Check if the Hero component renders correctly
  test("renders Hero component", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "images/homeHero.png");
  });
});