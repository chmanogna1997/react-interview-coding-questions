import { useState } from "react";

const menuItems = [
  {
    id: "home",
    label: "Home",
    path: "/"
  },
  {
    id: "products",
    label: "Products",
    path: "/products",
    children: [
      {
        id: "web",
        label: "Web Apps",
        path: "/products/web"
      },
      {
        id: "mobile",
        label: "Mobile Apps",
        path: "/products/mobile"
      },
      {
        id: "api",
        label: "APIs",
        path: "/products/api"
      }
    ]
  },
  {
    id: "solutions",
    label: "Solutions",
    path: "/solutions",
    children: [
      {
        id: "startups",
        label: "Startups",
        path: "/solutions/startups"
      },
      {
        id: "enterprise",
        label: "Enterprise",
        path: "/solutions/enterprise"
      }
    ]
  },
  {
    id: "pricing",
    label: "Pricing",
    path: "/pricing"
  },
  {
    id: "resources",
    label: "Resources",
    path: "/resources",
    children: [
      {
        id: "docs",
        label: "Documentation",
        path: "/resources/docs"
      },
      {
        id: "blog",
        label: "Blog",
        path: "/resources/blog"
      },
      {
        id: "guides",
        label: "Guides",
        path: "/resources/guides"
      }
    ]
  },
  {
    id: "about",
    label: "About",
    path: "/about"
  }
];

// Dropdown menu with nested items, toggled by click
function MenuBar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Toggle submenu open/closed based on click
  function indexSetting(index: any) {
    setSelectedIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <div>
      <h1>Menu Bar</h1>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        {menuItems &&
          menuItems.map((item, index) => {
            return (
              <li key={item.id} style={{ position: "relative" }}>
                <div>
                  {/* Toggle submenu visibility on button click */}
                  <button onClick={() => indexSetting(index)}>
                    {item.label}
                  </button>

                  {/* Show submenu items when this menu is selected */}
                  {index === selectedIndex && (
                    <div style={{ position: "absolute" }}>
                      {item.children &&
                        item.children.map((childItem) => {
                          return (
                            <div key={childItem.id}>
                              <a href={childItem.path}>{childItem.label}</a>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuBar