// @flow
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

type Props = {
  author: {
    name: string,
  }
};

const About = ({ author }: Props) => (
  <div className="about__wrapper">
    This boilerplate is created by {author.name}
  </div>
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
})(About);
