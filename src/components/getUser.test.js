//import file to test
import { renderWithClient } from "../tests/utils";
import GetUserTest from "./getUserTest/GetUserTest";

//using render with client function render components with test QueryClient
test('if user is fetched, the name shows on UI', async () => {
  //result of MOCK fetch for user
  //show what the UI would show "name"
  //pass in the component
  
  const resultHere = renderWithClient(<GetUserTest />);
  // const playerFour = GetUserTest(5);

  // expect(playerFour).toBe("Patricia Lebsack");
  expect( await resultHere.findByText(/Jane Doe/i)).toBeInTheDocument()
})