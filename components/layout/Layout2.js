import LeftSidebar from "../dashboard/sidebarleft";
import SidebarRight from "../dashboard/sidebarright";

export default function Layout({ children }) {
  return (
    <>
      <div className="grid grid-cols-4 bg-zinc-900 m-3 p-3">
        <LeftSidebar />
        <>{children}</>
      </div>
    </>
  );
}
