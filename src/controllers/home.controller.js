const getHomepage = (req, res) =>{
    // process data
    res.render('home/index.ejs', {data: "hello"})
}

export default getHomepage