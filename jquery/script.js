$(document).ready(function() {
    $(".College").css("color", "aquamarine");
    $(".EGE").css("fontSize", "35px");
    $(".Search").css("color", "red");
	
    $("input").attr("disabled", true);

	$("a").attr("target","_blank");
	_check=true
	$("#erase").click(function(){
		if (_check){
			_check=false;
			$("a").text((i,a) => a.slice(1));
			$("a").removeAttr("target");
		}
	});

    $("[href]").prepend("↗");
    $("[href]").each(function() {
        $(this).attr("href", $(this).attr("href").replace("http://", "https://"));
    });
   
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cellText = document.createElement("div");
    cell.appendChild(cellText);
    cellText.innerHTML = "Text";
    let cell2 = document.createElement("td");
    let cellText2 = document.createElement("div");
    cell2.appendChild(cellText2);
    cellText2.innerHTML = "Animation";
    row.appendChild(cell);
    row.appendChild(cell2);
    tableBody.appendChild(row);
    for (var i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let cellText = document.createElement("div");
        cellText.setAttribute("class", i);
        cellText.innerHTML = "Animation text";
        cell.appendChild(cellText);
        row.appendChild(cell);
        let cell2 = document.createElement("td");
        let cellText2 = document.createElement("button");
        cellText2.setAttribute("class", i);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.getElementsByTagName('body')[0].appendChild(table);
    table.setAttribute('border', '2');
	
    $("button.0").html("fadeOut");
    $("button.0").click(function() {
        $("div.0").fadeOut();
    });
	
    $("div.1").hide();
    $("button.1").html("fadeIn");
    $("button.1").click(function() {
        $("div.1").fadeIn();
    });
	
    $("button.2").html("slideUp");
    $("button.2").click(function() {
        $("div.2").slideUp();
    });
	
    $("div.3").hide();
    $("button.3").html("slideDown");
    $("button.3").click(function() {
        $("div.3").slideDown();
    });
	
    $("button.4").html("animate");
    $("button.4").click(function() {
        $("div.4").animate({ fontSize: '10px' });
    });

    
});