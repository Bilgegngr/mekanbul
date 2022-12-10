var mongoose=require("mongoose");
<<<<<<< Updated upstream

var yorumSema=new mongoose.Schema({
    yorumYapan:{type:String, required:true},
    yorumMetni:{type:String, required:true},
    puan:{type:Number,default:0,min:0,max:5},
    tarih:{type:Date, default:Date.now}
});
var saatSema=new mongoose.Schema({
    gunler:{type:String, required:true},
    acilis:String,
    kapanis:String,
    kapali: Boolean
});

var mekanSema=new mongoose.Schema({
   
    ad:{type:String,required:true},
    adres:{type:String,required:true},
=======
var saatSema = new mongoose.Schema({
    gunler:{type:String,required:true},
    acilis:String,
    kapanis:String,
    kapali:{type:Boolean}
});
var yorumSema = new mongoose.Schema({
    yorumYapan:{type:String,required:true},
    puan:{type:Number,default:0,min:0,max:5},
    yorumMetni:{type:String,required:true},
    tarih:{type:Date,default:Date.now}
});
var mekanSema = new mongoose.Schema({
    ad:{type:String,required:true},
    adres:String,
>>>>>>> Stashed changes
    puan:{type:Number,default:0,min:0,max:5},
    imkanlar:[String],
    koordinat:{type:[Number],index:"2dsphere"},
    saatler:[saatSema],
    yorumlar:[yorumSema]
<<<<<<< Updated upstream

});

mongoose.model("mekan",mekanSema,"mekanlar");
=======
});
mongoose.model("mekan",mekanSema,"mekanlar");
>>>>>>> Stashed changes
