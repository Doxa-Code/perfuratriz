"use client";

import { CustomizerContext } from "@/app/context/customizer-context";
import { Icon } from "@iconify/react";
import { Sidebar } from "flowbite-react";
import React, { useContext } from "react";
import SimpleBar from "simplebar-react";
import NavCollapse from "./nav-collapse";
import NavItems from "./nav-items";
import SidebarContent from "./sidebar-items";

const SidebarLayout = () => {
  const { isCollapse } = useContext(CustomizerContext);
  return (
    <>
      <div className="xl:block hidden">
        <div className="flex ">
          <Sidebar
            className="fixed menu-sidebar bg-white dark:bg-dark z-[6] border-r rtl:border-l border-border dark:border-darkborder"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <div
              className={`${
                isCollapse === "full-sidebar" ? "px-6" : "px-5"
              } flex items-center brand-logo overflow-hidden`}
            >
              Perfuratriz
            </div>

            <SimpleBar className="overflow-auto h-[calc(100vh_-_170px)]">
              <Sidebar.Items
                className={`${isCollapse === "full-sidebar" ? "px-6" : "px-4"}`}
              >
                <Sidebar.ItemGroup className="sidebar-nav">
                  {SidebarContent.map((item, index) => (
                    <React.Fragment key={index}>
                      <h5 className="text-link font-bold text-xs dark:text-darklink caption">
                        <span className="hide-menu leading-21">
                          {item.heading?.toUpperCase()}
                        </span>
                        <Icon
                          icon="tabler:dots"
                          className="text-ld block mx-auto leading-6 dark:text-opacity-60 hide-icon"
                          height={18}
                        />
                      </h5>

                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                          {child.children ? (
                            <div className="collpase-items">
                              <NavCollapse item={child} />
                            </div>
                          ) : (
                            <NavItems item={child} />
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </SimpleBar>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
