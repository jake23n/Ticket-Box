const getHomepage = (req, res) =>{
    try{
        const customer = req.session.customer;
        res.render('index', {customer})
    } catch(error){
        res.render('index', {customer: null})
    }
}

export default getHomepage

