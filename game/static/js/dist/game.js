class AcGameMenu{
    constructor(root){
        this.root=root;
        this.$menu=$(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings-mode">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode=this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode=this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings_mode=this.$menu.find('.ac-game-menu-field-item-settings-mode');
            
        this.start();
    }

    start(){
        this.add_listening_events();
    }
    add_listening_events(){
        let outer=this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$settings_mode.click(function(){
            console.log("click settings mode");
        });
    }

    show(){
        //显示menu界面
        this.$menu.show();
    }

    hide(){
        //关闭menu界面
        this.$menu.hide();
    }
}

let AC_GAME_OBJECTS=[];

class AcGameObject{
    constructor(){
        AC_GAME_OBJECTS.push(this);

        this.has_called_start = false; //是否执行过start函数

        this.timedalta = 0;// 当前帧距离上一帧的时间间隔(ms)
    }

    start(){// 只会在第一帧执行一次
    }

    update(){// 每一帧均会执行一次
    }

    on_destroy(){// 在被销毁前执行一次
    }

    destroy(){// 删掉该物体
        this.on_destory();
        for(let i=0;i<AC_GAME_OBJECTS.length;i++){
            if(AC_GAME_OBJECTS[i] === this){
                AC_GAME_OBJECTS.splice(i,1);
                break;
            }
        }
    }
}

let last_timestamp;

let AC_GAME_ANIMATION = function(timestamp){
    for(let i=0;i<AC_GAME_OBJECTS.length;i++){
        let obj = AC_GAME_OBJECTS[i];
        if(!obj.has_called_start){
            obj.start();
            obj.has_called_start=true;
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;

    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);
class GameMap extends AcGameObject{
    constructor(playground){
        super();
        this.playground = playground;
        this.$canvas = $(`<canvas></canvas>`);
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);

    }

    start(){
    }

    update(){
        this.render();
    }

    render(){
        this.ctx.fillStyle="rgba(0,0,0,6)";
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    }
}
class Player extends AcGameObject{
    constructor(playground,x,y,radius,color,speed,is_me){
        super();
        this.playground=playground;
        this.ctx=this.playground.game_map.ctx;
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.speed=speed;
        this.is_me=is_me;
        this.eps=0.1;
    }

    start(){
    }

    update(){
        this.render();
    }

    render(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}
export class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        // this.menu=new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);

        this.start();
    }


    start() {
    }
}
