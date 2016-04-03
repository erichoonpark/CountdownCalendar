var PDFDocument = require('pdfkit');

//BackEnd Shit
//Specify the size of the paper
module.exports = function(eventName, numberOfDays, res) {
	
	var doc = new PDFDocument({size: [1296,863.99999999999]});
	doc.pipe(res);
	//For Loop to render page until numberOfDays == 0
	for (; numberOfDays >= 0; numberOfDays--) {
		//Reformat the layout
		//Border
		doc.lineWidth(10)
		    .rect(10,10,1275, 840).stroke()
		
		doc.fontSize(10)
		   .moveDown(3)

		// draw some text
		doc.fontSize(420)
		   .text(numberOfDays, {align:'center'});

		// draw some text
		if(numberOfDays != 1){
			doc.fontSize(130)
			   .text('Days Until', {align:'center'}, 480);
		} else {
			doc.fontSize(130)
			   .text('Day Until', {align:'center'}, 480);
		}    
		// draw some text
		doc.fontSize(130)
		   .text(eventName, {align:'center'}, 620);

		//Stop adding pages after 0   
		if(numberOfDays > 0){doc.addPage();}
	}
	   
	// end and display the document in the iframe to the right
	doc.end();
	//Send the numberOfDays and eventName to BackEnd
	//Return a formatted pdf with correct numberOfDays and eventName
};

