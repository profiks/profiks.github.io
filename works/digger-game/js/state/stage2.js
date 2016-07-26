"use strict";
window.Digger.state.stage2 = {

preload: function(){
		// Load the jump sound
        this.game.load.audio('clang', '../../assets/clang.wav');
        this.game.load.audio('gold', '../../assets/gold.wav');  
        this.game.load.audio('rock', '../../assets/rock.wav');      

	},	
	create: function(){
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.clangSound = this.game.add.audio('clang');
        this.goldSound = this.game.add.audio('gold');
        this.rockSound = this.game.add.audio('rock');

		this.bg = mt.create("bg2");
		this.blocks = mt.create("blocks2");
		this.shop = mt.create("shop");
		this.character = mt.create("character");
		this.points = mt.create("points");
		
		this.character.animations.add('stand', [0, 1, 2, 3], 10, true);
		this.character.animations.add('fly', [4, 5, 6, 7], 10, true);
		this.character.animations.add('run', [8, 9, 10], 10, true);
		this.character.animations.add('fall', [12, 13, 14, 15], 10, true);
		this.character.animations.add('dig', [16, 17, 18], 10, false);
		this.character.animations.add('dig_down', [20, 21, 22], 10, false);
		this.character.animations.play('stand');
	},
	
	update: function(){
		var collideDown = false;
		this.game.physics.arcade.collide(this.character, this.blocks,
		  function(character, block){
			
			if(this.dig) return;	
				
			if(this.cursors.left.isDown){		
				if(block.body.touching.right){
					this.dig = this.character.animations.play('dig');
					this.dig.onComplete.addOnce(function(){
      					this.destroyBlock(block);
					}, this);							
				} else {
					this.character.animations.play('run');
				}					
			}

			else if(this.cursors.right.isDown){					
				if(block.body.touching.left){
					this.dig = this.character.animations.play('dig');
					this.dig.onComplete.addOnce(function(){
      					this.destroyBlock(block);
					}, this);					
				} else {
					this.character.animations.play('run');
				}

			}

			else if(this.cursors.down.isDown){					
				if(block.body.touching.up){
					this.dig = this.character.animations.play('dig_down');
					this.dig.onComplete.addOnce(function(){
      					this.destroyBlock(block);
					}, this);

				} else {
					this.character.animations.play('stand');
				}
			}		
			
			if(block.body.touching.up){
				collideDown = true;
			}
				
			
			
		}, null, this);
										 
		
		if(this.dig){
			return;	
		}
		

		if(this.cursors.left.isDown){
			this.character.scale.x = -1;
			this.character.body.velocity.x = -200;
		}
		else if(this.cursors.right.isDown){
			this.character.scale.x = 1;
			this.character.body.velocity.x = 200;
		}
		else {
			this.character.body.velocity.x = 0;	
		}
		
		
		if(this.cursors.up.isDown){
			this.character.body.velocity.y = -300;
			this.character.animations.play('fly');
		} else {
			if(!collideDown){
				this.character.animations.play('fall');
			}
			else if(this.character.body.velocity.x === 0){
				this.character.animations.play('stand');
			}
		}

		this.game.physics.arcade.overlap(this.character, this.shop,
		 	function(character, shop){
				if(character.getData().userData.gold > 0){
					var newPoints = parseInt(this.points._text) + character.getData().userData.gold;
					this.checkScore(newPoints);
					this.points.setText(newPoints);
					character.getData().userData.gold = 0;
				}
			}, null, this
		);
	},
	
	destroyBlock: function(block){
		this.dig = false;
		switch(block.key){
			case '/rock.png':
        		this.clangSound.play();
				break;
			case '/grass.png':
			case '/ground.png':
				this.rockSound.play();
				block.destroy();
				break;
			case '/diamonds.png':
				this.goldSound.play();
				this.character.getData().userData.gold++;
				block.destroy();
				break;
		}
	},

	checkScore: function(score) {
	    if(score > 3) {
	        this.game.state.start('stage3');
	     }
		},
	
	stopDig: function(){
		this.dig = false;	
	}
};