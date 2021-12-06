import React, { useEffect, useState } from "react";
import axios from "../../axios";
const AdminGetStats = () => {
  const [stats, setStats] = useState({
    donorCount: "-",
    requestCount: "-",
    approvedReq: "-",
    totalUnit: "-",
  });

  useEffect(() => {
    axios
      .get("/getStats")
      .then((res) => {
        setStats(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <i className="fas fa-users" />
              </div>
              <br />
              <div>
                Total Donors <br />
                {stats.donorCount}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <i className="fas fa-spinner" />
              </div>
              <br />
              <div>
                Total Requests <br />
                {stats.requestCount}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <i className="far fa-check-circle" />
              </div>
              <br />
              <div>
                Approved Requests <br />
                {stats.approvedReq}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card bg-light">
            <div className="card-body">
              <div className="blood">
                <i className="fas fa-tint xyz" />
              </div>
              <br />
              <div>
                Total Blood Unit<br />
                {stats.totalUnit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGetStats;
