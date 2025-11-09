export default async function handleFetch(url, option) {
    const res = await fetch(url, option)
    const data = await res.json()
    return data
}