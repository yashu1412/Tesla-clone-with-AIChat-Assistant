import React, { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthContext";
import { toast } from "sonner";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import { motion } from "framer-motion";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  region?: string;
  language?: string;
  role: "admin" | "employee" | "customer" | null;
  created_at: string;
}

const AllUsers: React.FC = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    if (!token) {
      setError("No auth token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/v1/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      if (!data.users || !Array.isArray(data.users)) {
        throw new Error("Invalid response format from API");
      }

      setUsers(data.users);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error occurred";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    if (!token) {
      toast.error("Unauthorized");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4001/api/v1/auth/${userId}/role`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'  // Added this header
        },
        body: JSON.stringify({ role: newRole }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to change role");
      }

      toast.success("✅ Role updated");
      // Update local state after successful role change
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, role: newRole as User["role"] } : user
        )
      );
} catch (err: unknown) {
  const message = err instanceof Error ? err.message : "Unknown error occurred";
  toast.error(message);
}

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <AdminNavbar />

      <motion.main
        className="flex-grow p-6 max-w-7xl w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">All Users</h2>

        {loading && <p className="p-4 text-gray-300">Loading users...</p>}
        {error && <p className="p-4 text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <motion.div
            className="overflow-x-auto rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <table className="min-w-full border border-gray-200 bg-gray-200 shadow-xl rounded-md">
              <thead>
                <tr className="bg-gray-400 text-left text-sm text-gray-900">
                  <th className="p-4 border-b border-gray-300">First Name</th>
                  <th className="p-4 border-b border-gray-300">Last Name</th>
                  <th className="p-4 border-b border-gray-300">Email</th>
                  <th className="p-4 border-b border-gray-300">Region</th>
                  <th className="p-4 border-b border-gray-300">Language</th>
                  <th className="p-4 border-b border-gray-300">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-4 text-center text-gray-400">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      className="hover:bg-gray-300 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="p-4 border-b border-gray-300">{user.first_name}</td>
                      <td className="p-4 border-b border-gray-300">{user.last_name}</td>
                      <td className="p-4 border-b border-gray-300">{user.email}</td>
                      <td className="p-4 border-b border-gray-300">{user.region ?? "N/A"}</td>
                      <td className="p-4 border-b border-gray-300">{user.language ?? "N/A"}</td>
                      <td className="p-4 border-b border-gray-300">
                        <select
                          value={user.role ?? ""}
                          onChange={(e) => handleRoleChange(user.id, e.target.value)}
                          className="border rounded px-2 py-1 bg-white text-sm"
                        >
                          <option value="admin">Admin</option>
                          <option value="employee">Employee</option>
                          <option value="customer">Customer</option>
                        </select>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </motion.div>
        )}
      </motion.main>

      <AdminFooter />
    </div>
  );
};

export default AllUsers;
