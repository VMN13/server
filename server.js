
const http=require("http"),url=require("url");
const EMAIL_PATH="/Stayspaceflux_gmail_com";

function g(a,b){
  while(b){
    let t=b;
    b=a%b;
    a=t;
  }
  return a;
}

function l(a,b){
  return(a/g(a,b))*b;
}

http.createServer((req,res)=>{
  const{pathname,query}=url.parse(req.url,true);
  if(req.method!=="GET"||pathname!==EMAIL_PATH){
    res.writeHead(404);
    res.end("NaN");
    return;
  }
  const{x,y}=query;
  if(!/^[1-9]\d*$/.test(x)||!/^[1-9]\d*$/.test(y)){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("NaN");
    return;
  }
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.end(l(BigInt(x),BigInt(y))+"");
}).listen(process.env.PORT||3000);