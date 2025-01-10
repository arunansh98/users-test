import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // render the component
  const users = [
    {
      name: "jane",
      email: "jane@jane.com",
    },
    {
      name: "sam",
      email: "sam@sam.com",
    },
  ];
  // const { container } = render(<UserList users={users} />); // for method 2
  render(<UserList users={users} />);

  // find all the rows in the table
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId("users")).getAllByRole("row"); // -> method 1
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr"); // -> for method 2

  // Assertion : correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the name and email of each user", () => {});
