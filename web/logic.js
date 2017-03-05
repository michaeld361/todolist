var app = {};
app.dom = {};

//alert(JSON.stringify(resp));


app.init = function()
{
	app.setupDOM();
	app.addListeners();
}


app.setupDOM = function()
{
	app.dom.viewBtn = document.getElementById('viewBtn');
	app.dom.postData = document.getElementById('postData');
	app.dom.dataContainer = document.getElementById('dataContainer');
	app.dom.bearName = document.getElementById('bearName');
    app.dom.listNameContainer = document.getElementById('listNameContainer');
}

app.addListeners = function()
{
	app.dom.viewBtn.addEventListener('click', function(){app.showData()});
	//app.dom.postData.addEventListener('click', function(){app.postData()});
}

app.showData = function()
{
	 $.get("http://localhost:7000/api/list", function(data, status){       
        var listData = JSON.stringify(data);
        console.log("Data: " + listData + "\nStatus: " + status);
        //app.dom.dataContainer.innerHTML = listData;
        app.listName(listData);
    });
}

app.listName = function(listData)
{
    app.newlist = JSON.parse(listData);
    console.log(app.newlist);
    for(var i = 0; i < app.newlist.length; i++)
    {
        console.log('hello lister!');
        var list = document.createElement('div');
        list.setAttribute('class', 'listName');
        list.setAttribute('id', i);
        list.setAttribute('onclick', 'showListItems(this.id)');
        var textnode = document.createTextNode(app.newlist[i].name);

        list.appendChild(textnode);
        app.dom.dataContainer.appendChild(list);
    }
}


function showListItems(id)
{
    app.dom.dataContainer.innerHTML = "";

    var listArray = app.newlist[id].todolist;
    for(var i = 0; i < listArray.length; i++)
    {
        var listitem = document.createElement('div');
        listitem.setAttribute('class', 'listitem');
        var textnode = document.createTextNode(listArray[i]);

        listitem.appendChild(textnode);
        app.dom.dataContainer.appendChild(listitem);
    }


}



app.postData = function()
{
	var bearName = app.dom.bearName.value;
	$.post("http://localhost:7000/api/bears",
    {
        name: bearName
    },
    function(data, status){
        var dataa = JSON.stringify(data);
        console.log("Data: " + dataa + "\nStatus: " + status);
        app.dom.dataContainer.innerHTML = dataa;
    });
}




setTimeout(function(){app.init();}, 10);