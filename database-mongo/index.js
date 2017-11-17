var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  //quantity: Number,
  //description: String
  id: {type:String, index:{unique: true}},
  name: String,
  //location: String,
  phone: String,
  image: String,
  bio: String

});
var drop = function(){db.items.drop();};

var Item = mongoose.model('Item', itemSchema);

var save = (datas) => {
   
    var profile = datas.profile;
    //console.log(data.practices[0].phones[0].number);
    //console.log('datas:', datas);
    //console.log('uid:',datas.practices[0].uid )
    newData = new Item({
      id: datas.practices[0].uid,
      name: profile.first_name + ' ' + profile.last_name,
      phone: datas.practices[0].phones[0].number,
      image: profile.image_url,
      bio: profile.bio
    })
    //console.log('new:',newData);
    //if(items)
    newData.save((err) => {
    if (err) console.error(err);
    console.log('Data Saved!');


  });
  
}


var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
module.exports.drop = drop;
module.exports.save = save;
module.exports.selectAll = selectAll;