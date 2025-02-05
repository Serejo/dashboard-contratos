import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Home,
  FileText,
  Calendar,
  ArrowBigLeft,
  Menu as MenuIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBarMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Menu Button for Mobile */}
      <button
        className="absolute top-4 left-4 z-10 bg-purple-600 text-white p-2 rounded lg:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <MenuIcon />
      </button>

      {/* Sidebar */}
      <Sidebar
        breakPoint="md"
        style={{
          height: "100vh",
          backgroundColor: "#F6F7FB",
          display: isMobileMenuOpen ? "block" : "none",
        }}
        className="lg:block"
      >
        {/* Logo */}
        <div
          className="flex items-center justify-self-center p-4"
          style={{ placeSelf: "center" }}
        >
          <img
            src="https://4matt.com.br/wp-content/uploads/2021/10/Logo-Principal-Roxo-1.png"
            alt="Logo"
            width="100"
            className="h-16"
          />
        </div>

        {/* Navigation Menu */}
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
          <MenuItem icon={<Home />}>Dashboard</MenuItem>
          <MenuItem icon={<FileText />}>Documentation</MenuItem>
          <MenuItem icon={<Calendar />}>Calendar</MenuItem>
          <MenuItem onClick={() => navigate("/login")} icon={<ArrowBigLeft />}>
            Sair
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBarMenu;
