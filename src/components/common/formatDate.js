
const formatDate = (isoDate) => {
    let date = new Date(isoDate)

    // console.log(date.toLocaleDateString());
    // console.log(date.toLocaleString());
    // console.log(date.toLocaleTimeString());

    return date.toLocaleString()
}

export default formatDate