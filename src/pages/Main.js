import { useState } from "react";
import ModelCode from "../components/ModelCode";
import ModelInfo from "../components/ModelInfo";
import { data } from "../helper/data";

const Main = () => {
  const [show, setShow] = useState(0);

  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <ModelCode data={data} show={show} setShow={setShow} />
      <ModelInfo data={data[show]} />
    </div>
  );
};

export default Main;
