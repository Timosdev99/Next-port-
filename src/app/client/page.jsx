"use client"

import { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch");
                
                const data = await response.json();
                setUsers(data);
                setError("");
            } catch (error) {
                setError(error instanceof Error 
                    ? `Failed to fetch users: ${error.message}` 
                    : "An error occurred"
                );
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => (
                <li 
                    key={user.id} 
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}

export default UserList;