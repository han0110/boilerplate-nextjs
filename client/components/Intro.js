// @flow

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

type Props = {
  author: {
    name: string,
  }
};

const Intro = ({ author }: Props) => (
  <h2>
    This boilerplate is created by {author.name}
  </h2>
);

const users = gql`
  query AllUsers {
    users {
      name
    }
  }
`;

export default graphql(users, {
  props: ({ data }) => ({ author: data.users[0] }),
})(Intro);
