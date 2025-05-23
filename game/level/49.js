oS.Init(
	{
		PName: [
			oPeashooter,
			oSunFlower,
			oCherryBomb,
			oWallNut,
			oPotatoMine,
			oSnowPea,
			oChomper,
			oRepeater,
			oPuffShroom,
			oSunShroom,
			oFumeShroom,
			oGraveBuster,
			oHypnoShroom,
			oScaredyShroom,
			oIceShroom,
			oDoomShroom,
			oLilyPad,
			oSquash,
			oThreepeater,
			oTangleKlep,
			oJalapeno,
			oSpikeweed,
			oTorchwood,
			oTallNut,
			oOxygen,
			ostar,
			oTTS,
			oGun,
			oTenManNut,
			oSeaAnemone,
			oCactus,
			oGatlingPea,
			oTwinSunflower,
			oSnowRepeater,
			oSeaShroom,
			oCattail,
			oPumpkinHead,
			oGarlic,
			oLotusRoot,
			oStarfruit,
			oCoffeeBean,
			oGloomShroom,
		],
		ZName: [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDolphinRiderZombie, oSubZombie, oSnorkelZombie],
		PicArr: (function () {
			return ["images/interface/background5.jpg"];
		})(),
		SunNum: 1300,
		LF: [0, 2, 2, 2, 2, 2],
		backgroundImage: "images/interface/background5.jpg",
		CanSelectCard: 1,
		LevelName: "Level 5-9",
		LvlEName: 29,
		LargeWaveFlag: {},
		InitLawnMower() {
			CustomSpecial(oPoolCleaner, 1, -1);
			CustomSpecial(oPoolCleaner, 2, -1);
			CustomSpecial(oPoolCleaner, 3, -1);
			CustomSpecial(oPoolCleaner, 4, -1);
			CustomSpecial(oPoolCleaner, 5, -1);
		},
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutWaterZombie(4, 9, 6, [oWarshipsZombie]);
		},
		StartGameMusic: "jiaxing",
	},
	{
		AZ: [
			[oDuckyTubeZombie1, 1, 4, [4]],
			[oDuckyTubeZombie2, 1, 3, [3]],
			[oDuckyTubeZombie3, 1, 1, [1]],
			[oDuckyTubeZombie4, 1, 5, [5]],
			[oDolphinRiderZombie, 2, 6, [7]],
			[oSubZombie, 3, 8, [8]],
			[oSnorkelZombie, 3, 9, [9]],
		],
		FlagNum: 40,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 19, 30],
			a2: [1, 7, 12, 20, 13, 16, 21, 30],
		},
		FlagToMonitor: {},
		FlagToEnd() {
			NewImg("imgSF", "images/interface/ZombieNoteSmall.png", "left:667px;top:220px", EDAll, {
				onclick() {
					PlayAudio("winmusic");
					SetHidden($("PointerUD"));
					SetStyle(this, {
						width: "613px",
						height: "399px",
						left: "193px",
						top: "100px",
					}).src = "images/interface/ZombieNote4.png";
					this.onclick = function () {
						SelectModal(50);
					};
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
