import { withRouter } from "react-router-dom";

import AdminForm from "./components/AdminForm";

const Adm = () => {
  return (
    <AdminForm />
  );
};

const Admin = withRouter(Adm);
export { Admin };
