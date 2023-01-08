//import file to test
import { renderWithClient } from "../tests/utils";
import GetUserTest from "./getUserTest/GetUserTest";
import {server} from "../setupTests";
import {rest} from "msw";

//using render with client function render components with test QueryClient
test('if user is fetched, the name shows on UI', async () => {
  //result of MOCK a component that has a fetch for user
  
  const resultHere = renderWithClient(<GetUserTest />);

  expect( await resultHere.findByText(/Jane Doe/i)).toBeInTheDocument()
});

test('If the user fetch fails, show error message', async () => {
  server.use(
    //"rest" from msw library
    rest.get("*", (req, res, ctx) => {
      //failing http request, ctx.status(500)
      return res(ctx.status(500))
    })
  )
  const resultHere = renderWithClient(<GetUserTest />);

  expect( await resultHere.findByText(/Could not fetch user..../i)).toBeInTheDocument()
})