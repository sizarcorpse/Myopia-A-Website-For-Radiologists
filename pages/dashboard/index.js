import {} from "react";

import { DashboardSurface } from "components/surface";
import { getSession } from "next-auth/react";
const Dashboard = (props) => {
  const { session } = props;

  return <DashboardSurface session={session}>Index</DashboardSurface>;
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });

  if (!session || session.user.role != "admin") {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Dashboard;
