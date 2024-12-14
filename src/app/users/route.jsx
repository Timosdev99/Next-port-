import { json } from "body-parser";

export const users = [
    {id: 1, Name: "ben"},
    {id: 2, Name: "ben"},

]

export const GET =  () => {
    return Response.json(users)
}

export const POST = async(request) => {
    const user = await request.json();
    const newuser = {
        id: users.length + 1,
        Name: user.name,
    }
users.push(newuser)
return new Response(JSON.stringify(newuser), {
    headers: {
        "Content-Type": "application/json",

    },
    status: 201,

})
}
