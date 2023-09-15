class AcGameMenu{
    constructor(root){
        this.root=root;
        this.$menu=$(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item">
            单人模式
        </div>
        <div class="ac-game-menu-field-item">
            多人模式
        </div>
        <div class="ac-game-menu-field-item">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
    }
}

class AcGame{
    constructor(id){
        this.id=id;
        this.$ac_game=$('#'+id);
        this.menu=new AcGameMenu(this);
    }
}
