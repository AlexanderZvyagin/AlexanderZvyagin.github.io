// export const POST = async ({request}) => {
//     const body = await request.json()
//     console.log(body);
//     return new Response(JSON.stringify({message:"Hello"}),{status:200})
// }

export const prerender = true

export const POST = async ({request}) => {
    const body = await request.json()
    // console.log(JSON.stringify(body))
    // console.log('-------------------')
    return fetch('http://az.hopto.org:8000/model',{
        method:"POST",
        body: JSON.stringify(body)
    })
}
