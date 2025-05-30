import {
  render as renderComponent,
  type RenderResult
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { UserEvent } from "node_modules/@testing-library/user-event/dist/types/setup/setup";

export const render = (
  ui: React.ReactElement,
  options?: Parameters<typeof renderComponent>[1]
): RenderResult & { user: UserEvent } => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup()
  };
};
