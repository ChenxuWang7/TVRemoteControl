function volUp(){
    $.ajax({
        url: "https://localhost:7345/volUp",
        type: "POST",
        //data: {like: 'yes'}, //send this to server
        success: function(returned) {
            console.log("VUp")
        },
        error: function() {

        }
    });
}


function volDown(){
    $.ajax({
        url: "https://localhost:7345/volDown",
        type: "POST",
        //data: {like: 'yes'}, //send this to server
        success: function(returned) {
            console.log('VDown');
        },
        error: function() {
        }
    });
}

function power(){
    $.ajax({
        url: "https://localhost:7345/power",
        type: "POST",
        //data: {like: 'yes'}, //send this to server
        success: function(returned) {
            console.log('power off');
        },
        error: function() {
        }
    });
}
function menu(){
    $.ajax({
        url: "https://localhost:7345/menu",
        type: "POST",
        //data: {like: 'yes'}, //send this to server
        success: function(returned) {
            console.log('menu');
        },
        error: function() {
        }
    });
}

