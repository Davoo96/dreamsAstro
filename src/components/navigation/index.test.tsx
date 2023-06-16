import { act, render, screen } from "@testing-library/react";
import Navigation from ".";
import { mainNavigationItems } from "./definitions";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Navigation component", () => {
  test("should render correctly", () => {
    render(<Navigation items={mainNavigationItems} logoNavigation="#" />);

    expect(
      screen.getByRole("button", { name: "Menu expand and close button" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Dreams Logo" })
    ).toBeInTheDocument();
  });

  test("should open and close", async () => {
    render(<Navigation items={mainNavigationItems} logoNavigation="#" />);

    const user = userEvent.setup({ delay: null });

    const expandButton = screen.getByRole("button", {
      name: "Menu expand and close button",
      expanded: false
    });

    await act(async () => await user.click(expandButton));

    expect(expandButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("link", { name: "Quem Somos" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projetos" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contato" })).toBeInTheDocument();
  });
});
