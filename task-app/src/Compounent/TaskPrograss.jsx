import React from "react";

import Pending from "./PrograssTask/Pending";
import InPrograss from "./PrograssTask/InPrograss";
import Completed from "./PrograssTask/Completed";
import Deployed from "./PrograssTask/Deployed";
import Deffered from "./PrograssTask/Deffered";
import { CompletedArray, DefferedArray, DeployedArray, PendingArray, PrograssArray } from "../Data";

const TaskPrograss = () => {

  return (
    <div className="flex flex-wrap justify-center mx-4 ">
    <Pending   tasks1={PendingArray }/>
    <InPrograss  tasks2={PrograssArray }/>
    <Completed   tasks3={CompletedArray }/>
    <Deployed  tasks4={DeployedArray }/>
    <Deffered  tasks5={DefferedArray }/>
    </div>
  );
};

export default TaskPrograss;
