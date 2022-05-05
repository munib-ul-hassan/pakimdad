const {loginSchema,registerSchema} = require('../middleware/validationSchema')

exports.login = async (req, res) => {
  try {
      console.log(req.body);
      const result = await loginSchema.validateAsync(req.body)
      
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
exports.register = async (req, res) => {
    try {
        
        const result = await registerSchema.validateAsync(req.body)
      
        result.create_dt = JSON.stringify(result.create_dt)
        res.send(result)
    } catch (err) {
        console.log(err);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
exports.googlelogin = async (req,res)=>{
  try {
        
   
} catch (err) {
    console.log(err);
  res.status(400).json({
    success: false,
    message: err.message,
  });
}
}
