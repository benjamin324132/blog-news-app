import { getUsers } from "@/actions/users";
import { DataTable } from "@/components/DataTable";
import { UserColumns } from "./components/TableColumn";
import { NewUser } from "@/components/forms/NewUser";

const Page = async () => {
  const users = await getUsers();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-4xl">Users</h3>
        <NewUser />
      </div>
      <DataTable searchKey="name" data={users} columns={UserColumns} />
    </div>
  );
};

export default Page;
