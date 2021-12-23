exports.checkNameExist = (req, res, next)=>{
    const {name} = req.body;

    if(name) return next();
    
    return res.status(400).json({ code: 'E_VALIDATION_FAILURE', message:'O campo \"name\" é obrigatório'});
}