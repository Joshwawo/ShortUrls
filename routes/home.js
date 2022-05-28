const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    const urls = [
        { origin: "www.google.com", shortURL: "lajsdnf" },
        { origin: "www.twitter.com", shortURL: "akmsfas" },
        { origin: "www.youtube.com", shortURL: "lasmds" },
    ]
    res.render('home', { urls: urls });

});


module.exports = router;