import { revalidatePath } from "next/cache";
const mockuser = async () => {
    const res = await fetch("https://675e07a363b05ed079796236.mockapi.io/user/users")
    const user = await res.json()

    async function addUser(formData) {
        "use server";
        const name = formData.get("name");
        const res = await fetch(
         "https://675e07a363b05ed079796236.mockapi.io/user/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
          }
        );
        const newUser = await res.json();
        console.log(newUser);
       revalidatePath("/mock-user");
      }

return (
    <div className="py-10">
        <form action={addUser} className="mb-4">
            <input type="text" className="border p-2 mr-2" name="name" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add user</button>
        </form>
    <div className="grid grid-cols-4 gap-4 py-10">
         {user.map((user) => (
                <li 
                    key={user.id} 
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    {user.name} {user.id}
                </li>
            ))}
    </div>
    </div>
)
}

export default mockuser