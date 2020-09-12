function main(){
  const canvas=document.getElementById("canvas");
  const ctx=canvas.getContext("2d");
  const x=300;
  const y=300;
  const r=100;
  const w=60;
  const s=10;
  ctx.beginPath();
  ctx.fillStyle="red";
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle="blue";
  ctx.arc(x,y,r,0,.5*Math.PI);
  ctx.moveTo(x,y);
  ctx.lineTo(x,y+r);
  ctx.lineTo(x+r,y);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle="yellow";
  ctx.fillRect(x+r,y-r,w,w);
  ctx.fillRect(x+r,y-r+w+s,w,2*r-w-s);
  ctx.fillStyle="green";
  ctx.fillRect(x+r+w,y-r,2*r,w);
  ctx.fillRect(x+r+w+r-w*.5,y-r,w,2*r);
}

