import { permanentRedirect } from "next/navigation";

type Props = {};

const Home = (props: Props) => {
  permanentRedirect("/store");
};

export default Home;
