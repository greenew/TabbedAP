function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = Ti.UI.createWindow({
		title:L('home'),
		backgroundColor: '#006633',
		layout: 'vertical'
	}),
		win2 = Ti.UI.createWindow({
		//title:L(''),
		backgroundColor: '#33B366',
		layout: 'horizontal',
	});

	var Textbox1 = Ti.UI.createLabel({
  		color: '#900',
  		font: { fontSize:48 },
  		shadowColor: '#aaa',
  		shadowOffset: {x:5, y:5},
  		shadowRadius: 3,
  		text: 'Learn Javascript with ease!',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 30,
  		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	win1.add(Textbox1);
	
	var Textbox2 = Ti.UI.createLabel({
  		color: '#800',
  		font: { fontSize:48 },
  		shadowColor: '#aaa',
  		shadowOffset: {x:5, y:5},
  		shadowRadius: 3,
  		text: 'Dream on...',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 30,
  		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	win2.add(Textbox2);
	
	
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
