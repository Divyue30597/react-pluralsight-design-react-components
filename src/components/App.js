import Layout from "./Layout";
// import { data } from "../../SpeakerData";
import Header from "./Header";
import Speakers from "./Speakers";

function App() {
  return (
    <Layout startingTheme="light">
      <Header />
      <Speakers />
    </Layout>
  );
}

export default App;
