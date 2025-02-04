import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Home, FileText, Calendar, ArrowBigLeft } from "lucide-react";

function SideBarMenu() {
  return (
    <Sidebar style={{ height: "100vh", backgroundColor: "#F6F7FB" }}>
      <div
        className="flex items-center justify-center p-4"
        style={{ placeSelf: "center" }}
      >
        <img
          src="https://4matt.com.br/wp-content/uploads/2021/10/Logo-Principal-Roxo-1.png"
          alt="Logo"
          width="100"
          className="h-16"
        />
      </div>

      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? "#000000" : "#794BCF",
                backgroundColor: active ? "#eecef9" : undefined,
              };
          },
        }}
      >
        <MenuItem
          icon={<Home />}
          className="decoration-black hover:decoration-pink-500"
        >
          Dashboard
        </MenuItem>
        <MenuItem icon={<FileText />}> Documentation </MenuItem>
        <MenuItem icon={<Calendar />}> Calendar </MenuItem>
        <MenuItem icon={<ArrowBigLeft />}> Sair </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBarMenu;
