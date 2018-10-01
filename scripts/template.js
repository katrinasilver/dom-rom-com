const createMovie = ({ title, year, score, starring }) => {

    return `
        <tr>
            <td>${title}</td>
            <td>${year}</td>
            <td>${score}</td>
            <td>${starring}</td>
        </tr>
    `
}

module.exports = createMovie;
