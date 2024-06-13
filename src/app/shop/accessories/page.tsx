import { RedirectType, permanentRedirect } from "next/navigation";

type Props = {};

const Accessories = (props: Props) => {
  permanentRedirect("/shop/accessories/all");
};

export default Accessories;
