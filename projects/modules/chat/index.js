const express = require('express')
const app = express()
const data = require('./newFlowS.json')
const mapper = require('./textMapper.json')
const messages = require('./messages.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function(req, res){
    res.send("It works!");
});

app.get("/text/:data", function(req, res){
    var re = req.params.data
    if(re.includes('*')){
        d = 
        re.split('_')
        var samp = {}
        d.forEach(k=>{
            var val = k.split('*')
            samp[val[0]] = val[1]
        })
        // flow = re.split('_')
        res.send(samp)
    }else{
        if(re.includes('&')){
            d = data[re.replace('&','')]
        
            res.send(d)
        }else{
    
        var state = mapper[re].split('@')
        if(state.length>1){
            res.send({[state[0]]:state[1].split(',')});
        }else{
            res.send({[re]:mapper[re]});
        }
    }
}

});

app.get("/newFlow/:data", function(req, res){
    var re = req.params.data
    if(re.includes('_')){
        d = re.split('_')
        var samp = {}
        d.forEach(k=>{
            var val = k.split('*')
            samp[val[0]] = val[1]
        })
        res.send(samp)
    }else{
        var d = {
            data:messages[re],
            options:customFilter(data,re.trim())
        }
        res.send(d)
    }
});

function customFilter(object,re){
    console.log(re);
    
    if(object.hasOwnProperty(re) && object[re] == 1)
        return object;

    for(var i=0; i<Object.keys(object).length; i++){
        if(typeof object[Object.keys(object)[i]] == "object"){
            var o = customFilter(object[Object.keys(object)[i]],re);
            if(o != null)
                return o;
        }
    }

    return null;
}

app.listen(4000, (err, res)=>{
    console.log('Connection Established');
})