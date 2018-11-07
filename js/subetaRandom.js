 var speciesA = ["Montre", 
        "Kumos",
        "Keeto",
        "Dragarth",
        "Legeica", 
        "Telenine",
        "Devonti",
        "Anyu"
        ];
        
        var coloursA = ["Angelic",
        "Aqua",
        "Arid",
        "Blacklight",
        "Bloodred",
        "Cherry",
        "Chibi",
        "Common",
        "Cream",
        "Darkmatter",
        "Dawn",
        "Dusk",
        "Field",
        "Galactic",
        "Glacier",
        "Glade",
        "Gold",
        "Graveyard",
        "Harvest",
        "Hydrus",
        "Lilac",
        "Marsh",
        "Nightmare",
        "Nostalgic",
        "Nuclear",
        "Reborn",
        "Scribble",
        "Silver",
        "Spectrum",
        "Steamwork",
        "Storm",
        "Sun",
        "Sweetheart",
        "Twilight",
        "Vibrant"
        ]
        
        var specNum = "";
        var colNum = "";
        var spec ="";
        var col ="";
        
        function generate() {
                genSpec();
                genCol();
        }
        
        function genSpec() {
                getSpec();
                spec = speciesA[specNum];
            document.getElementById("demo0").innerHTML = spec;
                display();
        }
        
        function genCol() {
                getCol();
                col = coloursA[colNum].toString();
            document.getElementById("demo1").innerHTML = col;
                display();
        }
        
        function display(){
        if (col == "Common"){
                document.getElementById("petPic").src = "https://img.subeta.net/pets/" + spec.toLowerCase() + ".png";
        }
        else{
                document.getElementById("petPic").src = "https://img.subeta.net/pets/" + spec.toLowerCase() + "_" + col.toLowerCase() + ".png";
        }
        }
        
        //this function gets a random index from the speciesA array
        function getSpec(){
                    specNum = Math.floor(Math.random()*speciesA.length);
        
        }
        
        //this function gets a random index from the coloursA array
        function getCol(){
                    colNum = Math.floor(Math.random()*coloursA.length);
        
        }
