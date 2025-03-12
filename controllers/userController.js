const pageNotFound = async(req, res) => {
    try {
        res.render('page-404');
    }
    catch (error) {
        console.error("Error in pageNotFound: ", error);
        res.redirect('/pageNotFound');
    }
};
const loadHomePage=async(req,res)=>{try
    {
    return res.render('home');

    }
    catch(error)
    {
        console.error("Error in loadHomePage:")
    res.status(500).send("Internal Server Error");
    }
}
    module.exports = { loadHomePage, pageNotFound };
