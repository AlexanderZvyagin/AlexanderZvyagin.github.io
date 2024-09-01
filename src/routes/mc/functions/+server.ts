export const prerender = true

export const GET = () => {
    return fetch('http://az.hopto.org:8000/functions')
}
