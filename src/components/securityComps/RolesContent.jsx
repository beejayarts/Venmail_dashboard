import React, { useState } from "react";
import RoleContentSuper from "./RoleContentSuper";
import RoleContentAdmin from "./RoleContentAdmin";
import RoleContentUser from "./RoleContentUser";

const RolesContent = () => {
  const [roleTabContent, setRoleTabContent] = useState("super");
  return (
    <div>
      <div className="roles_content_header">
        <h5 className="text-vengray font-bold  text-xl">Roles and Privilege</h5>
      </div>
      <div className="rc_tab_btns w-full border-b mb-8 ">
        <button
          onClick={() => setRoleTabContent("super")}
          className={`py-3 mr-10 text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold ${
            roleTabContent == "super" ? "border-venblue border-b-4" : ""
          } `}
        >
          Super Admin{" "}
        </button>
        <button
          onClick={() => setRoleTabContent("admin")}
          className={`py-3 mr-10 text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold ${
            roleTabContent == "admin" ? "border-venblue border-b-4" : ""
          }  `}
        >
          {" "}
          Admin{" "}
        </button>
        <button
          onClick={() => setRoleTabContent("user")}
          className={`py-3 mr-10 text-vengray text-base hover:text-venblue duration-300 transition-all font-semibold ${
            roleTabContent == "user" ? "border-venblue border-b-4" : ""
          } `}
        >
          User Admin{" "}
        </button>
      </div>
      <div className="rc_tab_content">
        {roleTabContent == "super" && <RoleContentSuper />}
        {roleTabContent == "admin" && <RoleContentAdmin />}
        {roleTabContent == "user" && <RoleContentUser />}
      </div>
    </div>
  );
};

export default RolesContent;
