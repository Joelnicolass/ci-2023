import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("Debe montar el componente", () => {
    render(<App />);
    expect(true).toBe(false);
  });
});
