import RightPane from "./RightPane";
import Contact from "./Contact";
import Navbar from "../components/Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <RightPane />
        <Contact />
      </div>
    </div>
  );
}

export default ContactUs;
