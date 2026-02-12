import { act, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navigation from ".";
import { render } from "../../tests/utilities";
import { mainNavigationItems } from "./definitions";

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
    const { user } = render(
      <Navigation items={mainNavigationItems} logoNavigation="#" />
    );

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
