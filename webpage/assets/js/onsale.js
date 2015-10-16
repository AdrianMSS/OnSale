$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$('button').click(function() {
	var name = $('#formName').val(),
	    email = $('#formEmail').val(),
	    value = $('#formOffer').val();
	if(name!=='' && email !=='' && parseFloat(value)>=250){
	    var url = 'email/',
		    data = {
		      'email': email, 
		      'name': name,
		      'price': value
		    };
		$.ajax({ 
		    url: url,
		    type: 'POST',
		    data: JSON.stringify(data),
		    beforeSend : function(req) { 
		      req.setRequestHeader('content-type', 'application/json'); 
		    },
		    success: function(res){
		      alert('Message Sent.');
		      $('#formName').val('');
		      $('#formEmail').val('');
		      $('#formOffer').val(250);
		      messageNum=true;
		    }.bind(this),
		    error: function(res){
		      alert('Error: Message not Sent, Try Again.');
		      messageNum=true;
		    }.bind(this)        
		  });
	  	}
	});