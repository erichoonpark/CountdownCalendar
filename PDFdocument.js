//BackEnd Shit
var doc = new PDFDocument({
  size: "Legal",
  layout : 'landscape',
  margins : {
         top: 0, 
         bottom: 0,
         left: 0,
         right: 0
     },
});

var stream = doc.pipe(blobStream());

var eventdays;

for(eventdays>0){

doc.addPage();

//Border
doc.lineWidth(10)
    .rect(10,10,988, 590).stroke()


//Text
doc.fontSize(250)
   .moveDown(.3)
   .text(eventdays, {align:"center"}),

doc.fontSize(120)
   .moveUp(.5)
   .text('Days Until',{align:"center"});
   
doc.fontSize(140)
   .moveUp(.1)
   .text('Event Name',{align:"center"});

eventdays--;
};

// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});