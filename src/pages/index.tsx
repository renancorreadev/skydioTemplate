import type { NextPage } from "next";

import { CalculateSum } from "@components/CalculateSum";

const Home: NextPage = () => {
  return (
    <div>
      <CalculateSum />
    </div>
  );
};

export default Home;
