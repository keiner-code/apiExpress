const boom = require('@hapi/boom');

function checkApiKey(req, res, next){
  const apikey = req.headers['api'];
  if(apikey == '123'){
    next();
  }else{
    next(boom.unauthorized());
  }
}

function checkRoles(...roles){
  return (req, res, next) => {
    const user = req.user;
    if(roles.includes(user.role)){
      next();
    }else {
      next(boom.unauthorized());
    }
  }
}

module.exports = {checkApiKey,checkRoles};
