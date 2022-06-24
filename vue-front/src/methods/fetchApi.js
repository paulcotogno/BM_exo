export default async function getPourcentage (code) {
    const response = await fetch('http://localhost:3080/result/' + code)
    return response.json();
}