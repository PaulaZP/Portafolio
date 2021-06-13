function init(){
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let width = canvas.width;
  let height = canvas.height;
  let width2 = width * 0.5;
  let degraded = 0;
  let topiary = new branch(80, 0, 0);
  let counter = 0;

  function anim(){
      counter++;
      degraded += 0.3;

      if (counter % 2) {
          draw();
      }

      window.requestAnimationFrame(anim);
  }
  anim();

  function draw() {
      ctx.save();
      ctx.clearRect(0, 0, width, height);
      ctx.translate(width2, height * 0.95);
      ctx.rotate(-Math.PI * 0.5);
      topiary.disp(ctx);
      ctx.restore();
  }

  function branch(len, ang, gen){
      this.len = len;
      this.ang = ang;
      this.gen = gen;
      this.limb = [];
      this.sway = 0;
      this.mult = numRandom(0.01, 0.1);
      this.spawn = 0;
      this.vel = 0;

      if(gen < 10){
          this.limb.push(new branch(len * numRandom(0.5, 0.99),
          numRandom(0, Math.PI / 6), this.gen + 1));
          this.limb.push(new branch(len * numRandom(0.5, 0.99),
          numRandom(0, -Math.PI / 6), this.gen + 1));
      }

      this.disp = function(ctx){
          this.sway++;
          ctx.save();
          this.vel *= 0.9;

          let dif = 1-this.spawn;
          this.vel += (dif * 0.1);
          this.spawn += this.vel;

          ctx.strokeStyle = "hsla(" + (degraded % 360) + ",100%,50%,1)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.rotate(this.ang + (Math.sin(this.sway * this.mult) * Math.PI / 128));
          ctx.moveTo(0, 0);
          ctx.lineTo(this.len * this.spawn, 0);
          ctx.stroke();
          ctx.translate(this.len * this.spawn, 0);

          if(this.spawn > 0.6){
              for(let i = 0; i < this.limb.length; i++){
                  let limb = this.limb[i];
                  limb.disp(ctx);
              }
          }

          ctx.restore();
      };
  }

  function numRandom(min, max){
      return Math.random() * (max - min) + min;
  }
}
init();
