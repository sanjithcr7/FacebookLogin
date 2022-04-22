const mongoose=require('mongoose');
const plm=require('passport-local-mongoose');
let uri='mongodb://localhost:27017/ck12new';
mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true});

const userSchema=mongoose.Schema({
  name:String,
  email:String,
  username:String,
  password:String,
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'posts'
  }]
});


userSchema.plugin(plm);



module.exports = mongoose.model('user',userSchema);
