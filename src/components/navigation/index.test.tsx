import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Navigation from "~/components/navigation";
import { mainNavigationItems } from "~/components/navigation/definitions";

describe("Navigation component", () => {
  it("should render correctly", () => {
    render(<Navigation items={mainNavigationItems} logoNavigation="#" />);

    expect(
      screen.getByRole("button", { name: "Menu expand and close button" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Dreams Logo" })
    ).toBeInTheDocument();
  });

  it("should open and close", async () => {
    render(<Navigation items={mainNavigationItems} logoNavigation="#" />);

    const user = userEvent.setup();
    const expandButton = screen.getByRole("button", {
      name: "Menu expand and close button",
      expanded: false
    });

    await user.click(expandButton);

    expect(expandButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("link", { name: "Quem Somos" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projetos" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contato" })).toBeInTheDocument();
  });
});
