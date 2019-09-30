// const printer = require('node-thermal-printer');

// let print = () => {
//   printer.init({
//     type: 'epson',
//     interface: '/dev/usb/lp0'
//   });

//   printer.clear();
//   printer.setTypeFontA();
//   printer.alignCenter();
//   printer.print('pavan koka');
//   printer.cut();
//   printer.execute(function(err){
//     if (err) {
//       console.error("Print failed", err);
//     } else {
//      console.log("Print done");
//     }
//   });
// }

// print();


const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const electron = typeof process !== 'undefined' && process.versions && !!process.versions.electron;

( async () => {
  const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: '/dev/usb/lp0'
    // driver: require(electron ? 'electron-printer' : 'printer')
  });
  
  let isConnected = await printer.isPrinterConnected();
  console.log(isConnected);  
  printer.println("Hello world");
  printer.alignCenter();
  printer.println("Hello world");
  // await printer.printImage('./assets/olaii-logo-black.png')
  printer.cut();
  printer.execute((err, data)=> {
    console.log('aaaaaaaaaaaaa');
    console.log(err);
    console.log(data);
  });
  // console.log(execute);
})()
