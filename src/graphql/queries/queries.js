import { gql } from "@apollo/client";

const LOGIN_ADMIN = gql`
  query LOGIN_ADMIN {
    admin(where: { username: { _eq: "" }, password: { _eq: "" } }) {
      password
      username
    }
  }
`;

export {LOGIN_ADMIN}