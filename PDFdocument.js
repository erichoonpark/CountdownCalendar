var PDFDocument = require('pdfkit');

//BackEnd Shit
//Specify the size of the paper
module.exports = function(eventName, numberOfDays, res) {
	var doc = new PDFDocument({size: [1296,863.99999999999]});
	doc.pipe(res);

	//Reformat the layout
	//Border
	doc.lineWidth(10)
	    .rect(10,10,1275, 840).stroke()
	    
	// draw some text
	doc.fontSize(450)
	   .text(numberOfDays, 250, 90);

	// draw some text
	doc.fontSize(150)
	   .text('Days Until', 300, 480);

	// draw some text
	doc.fontSize(150)
	   .text(eventName, 250, 618);
	   
	// end and display the document in the iframe to the right
	doc.end();
	//Send the numberOfDays and eventName to BackEnd
	//Return a formatted pdf with correct numberOfDays and eventName
};

//For Loop to render page until numberOfDays == 0
for (; numberOfDays >= 0; numberOfDays--) {
	
}