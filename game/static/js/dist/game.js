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
            console.log("click single mode");
        });
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        this.$settings_mode.click(function(){
            console.log("click settings mode");
        });
    }
}

class AcGame{
    constructor(id){
        this.id=id;
        this.$ac_game=$('#'+id);
        this.menu=new AcGameMenu(this);
    }
}
