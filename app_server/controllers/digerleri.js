<<<<<<< Updated upstream
const hakkinda = function (req, res) {
    res.render('hakkinda', { "title": "Hakkında" });
}

module.exports = {
=======
const hakkinda=function(req,res,next){
    res.render('hakkinda',{title: 'Hakkında Sayfası'});
};

module.exports={
>>>>>>> Stashed changes
    hakkinda
}