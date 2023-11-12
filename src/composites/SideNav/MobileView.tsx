import NavItemList from "./_sub/NavItemList";

type Props = {
  toggleSideNav: () => void;
};

export default function MobileSideNav({ toggleSideNav }: Props) {
  return (
    <div className="animate-in slide-in-from-top lg:hidden border-r border-gray-200 p-2 space-y-2 basis-[20rem]">
      <NavItemList toggleSideNav={toggleSideNav} />
    </div>
  );
}
