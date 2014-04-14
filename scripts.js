/**
 * @author Harry Stevens
 */

var moreInfo = {
	"cycloneInfo":"More info about cyclone.",
	"wheelInfo":"More info about whonder wheel.",
	"paraInfo":"More info about parachute jump."
}
var modalVideo = {
	"cycloneMod":"<iframe width='100%' height='400px' src='http://www.youtube.com/embed/lxSCNto21mU?html5=1' frameborder='0' allowfullscreen>",
	"wheelMod":"<iframe width='100%' height='400px' src='http://www.youtube.com/embed/OK25N1Pw14w?html5=1' frameborder='0' allowfullscreen>",
	"paraMod":"<iframe width='100%' height='400px' src='http://www.youtube.com/embed/SIR0jxqfl4c?html5=1' frameborder='0' allowfullscreen>"
}

function modals() {
	$(".btn-ride").on("click", function(e) {
		var btnID = e.target.id;
		$("#"+btnID+"Body").html(modalVideo[btnID]);
		$("#"+btnID+"Modal").modal();
	});
	$('.close-window').on("click", function() {
		$('.modal-body').html("&nbsp;");
	});
}

function info() {
	$('.moreInfo').on("click", function(e) {
		var myID = e.target.id;
		$("#"+myID+"Div").append(moreInfo[myID+"Info"]);
	});
}

$(document).ready(function() {
	modals();
	info();
});