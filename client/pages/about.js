// @flow

import withData from '../apollo/withData';
import Layout from '../layouts';
import About from '../components/About';


const Index = withData(() => (
  <Layout>
    <About />
  </Layout>
));

export default Index;
