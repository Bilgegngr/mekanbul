var mongoose=require("mongoose");
<<<<<<< Updated upstream
var dbURI="mongodb://localhost/mekanbul";
//var dbURI="mongodb+srv://mekan32:mekan32@mekanbul.xsa3hbp.mongodb.net/?retryWrites=true&w=majority";

=======
require("./mekansema");
//var dbURI="mongodb://localhost/mekanbul";
var dbURI="mongodb+srv://mekan32:mekan32@mekanbul.jiygsvz.mongodb.net/mekanbul?retryWrites=true&w=majority";
>>>>>>> Stashed changes
mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback(); 
    });
<<<<<<< Updated upstream

}
process.on("SIGNIT",function(){
    kapat("uygulama kapatildi",function(){
    process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
console.log(dbURI +"Adresindeki veritabanına bağlandı");
});
mongoose.connection.on("disconnected",function(){
    console.log("baglanti koptu");
});
mongoose.connection.on("error",function(){
        console.log("bağlantı hatası");
});
        

require("./mekansema");
=======
}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı!",function(){
        process.exit(0);
    })
})
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı");
}
);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" adresindeki veritabanı bağlantısı koptu");
}
);
mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası");
}
);
>>>>>>> Stashed changes
