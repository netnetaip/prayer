export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const url = `https://6016e904f534300017a4509d.mockapi.io/board?page=1&limit=40`;
    const res = await fetch(url);
    const entries = await res.json();

    return {
        entries
    };
}