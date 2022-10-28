import Layout from "../components/layout/index";
import LeftSidebar from "../components/dashboard/sidebarleft";

const Aa = () => {
  return (
    <>
      <LeftSidebar />
      <div className="col-span-2 border-x-2 border-zinc-600 ">
        <div className="flex flex-col items-center scrollll">
          <h1 className="text-4xl text-white">404 !!</h1>
        </div>
      </div>
    </>
  );
};
Aa.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Aa;
Aa.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
