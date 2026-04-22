import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./Form";

describe("Login Form Component", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("RENDERS email and password fields", () => {
    render(<Form />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
  });

  it("SHOWS ERROR for short password", () => {
    render(<Form />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /Register/i });

    fireEvent.change(name, { target: { value: "Parth" } });
    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123@aA2" } });

    fireEvent.blur(password);

    fireEvent.click(button);

    expect(
      screen.getByText("8+ chars with upper, lower, number & special char")
    ).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<Form />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /Register/i });

    fireEvent.change(name, { target: { value: "Parth" } });
    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123@aA89" } });

    fireEvent.blur(password);
    fireEvent.blur(email);

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Registration Successful");
  });

});