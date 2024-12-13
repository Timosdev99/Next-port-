const page = async ({params}) => {
    const id = params.id
    return <h1>products: {id}</h1>
}

export default page