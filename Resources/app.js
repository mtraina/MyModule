// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var button = Ti.UI.createButton({
    title: "Scan barcode",
    height:50,
    width:250,
    bottom:20
});

button.addEventListener('click', function(){

/*var textMap = new Object();
var showedMsgKey = 'showedMessage';
textMap.showedMsgKey = 'koocode message!';*/

var titaniumBarcode = require('com.koocode.android.titanium');

        titaniumBarcode.testMethod({
            success:function(data) {
              if(data && data.result) {
                label1.text = 'Result: ' + data.result;
              } else {
                alert(JSON.stringify(data));
              }
            },

            error:function(err) {
              alert("Error!! " + err);
              label1.text = "operation error";
            },

            cancel:function() {
              alert("cancel");
              label1.text = "operation cancelled";
            }
          });
});

win1.add(button);

tabGroup.addTab(tab1);
// tabGroup.addTab(tab2);

// open tab group
tabGroup.open();