$(document).ready(function() {
	$('#drag').draggable({axis:'x'});
});

$( function() {
	$( "#draggable" ).draggable();
	$( "#droppable" ).droppable({
		drop: function( event, ui ) {
			$( this )
			.addClass( "ui-state-highlight" )
			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#resizable" ).resizable();
	$( "#selectable" ).selectable();
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#accordion" ).accordion();
    var availableTags = [
      "Ashiq",
      "Bashir",
      "Emon",
      "Rahat",
      "Sumon"
    ];
	$( "#ppl" ).autocomplete({
    	source: availableTags
   	});

   	$( "#datepicker" ).datepicker();
   	$( "#dialog" ).dialog();
   	$( ".widget input[type=radio], .widget input[type=checkbox]" ).checkboxradio();
   	$( "#menu" ).menu();
   	$( "#tabs" ).tabs();
   	$( document ).tooltip();

} );
