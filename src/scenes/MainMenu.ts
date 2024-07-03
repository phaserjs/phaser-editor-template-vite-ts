// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		this.add.image(512, 384, "background");

		// logo
		this.add.image(512, 384, "logo");

		// text
		const text = this.add.text(512, 460, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Main Menu";
		text.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Arial Black", "fontSize": "38px", "stroke": "#000000", "strokeThickness":8});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

    create ()
    {

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });

        this.editorCreate();
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here