import { users } from "../route"

export const GET = async (req, { params }) => {
    const id = parseInt(params.id);
    
    const user = users.find(user => user.id === id);
    
    if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    
    return Response.json(user);
}

export const DELETE = async (req, { params }) => {
    const id = parseInt(params.id);
    
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return new Response(JSON.stringify({
            message: "No user found"
        }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    return new Response(JSON.stringify({
        message: "User deleted successfully",
        deletedUser
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
