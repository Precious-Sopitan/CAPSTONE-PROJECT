
import DashboardSideBar from "../component/DashboardSideBar";
import DashboardMain from "../component/DashboardMain";

const Dashboard = () => {
  

  return (
   
    <div className="flex flex-row">
      <DashboardSideBar/>
      <DashboardMain/>
      
    </div>
  );
};

export default Dashboard;
