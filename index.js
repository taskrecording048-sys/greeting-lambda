exports.handler = async (event) => {
    const name = (event && event.name) ? event.name : 'World'
    return `Hello, ${name}!`
}