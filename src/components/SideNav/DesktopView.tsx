import NavItemList from "./_sub/NavItemList";

export function DesktopSideNav() {
  return (
    <div className="hidden lg:block border-r border-gray-200 p-2 space-y-2 min-w-[16rem]">
      <NavItemList />
    </div>
  );
}
