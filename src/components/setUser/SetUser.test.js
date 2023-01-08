import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithClient } from "../../tests/utils";
import SetUser from "./SetUser";

test("If user is created, show the user name", async () => {
  const result = renderWithClient(<SetUser/>);
  userEvent.click(screen.getByRole('button', { name: /mutate/i}))

  expect(await result.findByText(/Doe Doe/i)).toBeInTheDocument();
})