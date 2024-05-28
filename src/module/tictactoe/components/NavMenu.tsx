// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { GoChecklist } from "react-icons/go";
// import { MdLibraryAdd, MdOutlineSettingsSuggest } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { isMobile, SERVER_ROUTE } from "../../../Constants";
// import { useNavMenu } from "../../../hooks/uiHooks/useNavMenuHook";

export const NavMenu = () => {
//   const { navMenu, UpdateNavMenu } = useNavMenu();

  return (
    <>
      <div className="grid grid-cols-4 gap-0 sm:gap-4 py-2 md:gap-4 md:m-4 justify-items-center">
        {/* <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: true,
              nav2: false,
              nav3: false,
              nav4: false,
            });
          }}
        >
          <MdLibraryAdd
            className="size-6 md:size-10 nav-menu-icons"
            title="GenerarPro"
          />
        </NavLink>
        <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}price`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: false,
              nav2: true,
              nav3: false,
              nav4: false,
            });
          }}
        >
          <FaFileInvoiceDollar className="size-6 md:size-10 nav-menu-icons" />
        </NavLink>

        <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}list`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: false,
              nav2: false,
              nav3: true,
              nav4: false,
            });
          }}
        >
          <GoChecklist className="size-6 md:size-10 nav-menu-icons" />
        </NavLink>
        <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}settings`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: false,
              nav2: false,
              nav3: false,
              nav4: true,
            });
          }}
        >
          <MdOutlineSettingsSuggest className="size-6 md:size-10 nav-menu-icons" />
        </NavLink>
        <div className="grid grid-cols-4 gap-0 sm:gap-4 md:gap-4 md:m-4 justify-items-center w-full absolute">
          <BgIconMenu active={navMenu.nav1} />
          <BgIconMenu active={navMenu.nav2} />
          <BgIconMenu active={navMenu.nav3} />
          <BgIconMenu active={navMenu.nav4} />
        </div> */}
      </div>
    </>
  );
};

// const BgIconMenu = (props: any) => {
//   const { active } = props;

//   return (
//     <div
//       className={`${
//         active
//           ? "rounded-lg w-full h-[30vh] -translate-y-2 md:-translate-y-9"
//           : "w-2 h-2 translate-y-10 md:translate-y-20 rounded-3xl"
//       } bg-skin-primary/30 transition-all duration-300 ease-in-out`}
//     ></div>
//   );
// };
