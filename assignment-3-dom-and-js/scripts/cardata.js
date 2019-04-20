//Car Data
//IMPORTANT! Include a reference to this script BEFORE your own JS files if you want to use the carsJSON object
var carsJSON = {
     makes: [
          {
               makeName: "Chevy",
               models: [
                    {
                         modelName: "Camaro",
                         trimOptions: ["SS", "Convertible", "T-Tops"]
                    },
                    {
                         modelName: "Corvette",
                         trimOptions: ["Z", "Convertible", "T-Tops"]
                    },
                    {
                         modelName: "Monte Carlo",
                         trimOptions: ["Standard", "T-Tops"]
                    }
               ]
          },
          {
               makeName: "Honda",
               models: [
                    {
                         modelName: "Accord",
                         trimOptions: ["LX", "EX"]
                    },
                    {
                         modelName: "CR-V",
                         trimOptions: ["EX-L", "Standard", "6 Cyl"]
                    },
                    {
                         modelName: "Pilot",
                         trimOptions: ["6 Cyl", "8 Cyl"]
                    }
               ]
          },
          {
               makeName: "Toyota",
               models: [
                    {
                         modelName: "Camry",
                         trimOptions: ["Hybrid", "SE", "LE"]
                    },
                    {
                         modelName: "RAV-4",
                         trimOptions: ["4x4", "Towing Package"]
                    }
               ]
          }
     ]
};
