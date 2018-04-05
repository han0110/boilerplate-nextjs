// @flow

import withData from '../apollo/withData';
import Hello from '../components/Hello';

import '../styles/style.scss';

const Index = withData(() => (
  <Hello />
));

export default Index;
