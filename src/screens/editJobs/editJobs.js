import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const EditJobs = (props) => {
  const authenticated = useSelector((store) => store);
  const history = useHistory();
  
  useEffect(()=>{
    if(!authenticated) {
        history.push("/signin");
      }
  })

  return (
    <div>
      <h3> Edit Jobs</h3>
    </div>
  );
};

export default EditJobs;
