function Tester() {

    var file;

    fetch('./perftPos.txt')
    .then(response => response.text())
    .then(text => {file = text
        

        var ks = file.split(/\r?\n/);
        // console.log(ks[0]);
        var sz = ks.length;
        // console.log(sz);
        var passed =  0;
        var failed = 0;
        for(var i = 0;i<sz;i++){
            
            var currPos = ks[i].split(" ;");
            var fen = currPos[0];
            if(i == 126){
                console.log(fen);
                continue;
            }
            ParseFen(fen);
            // PrintBoard();
            // console.log(currPos);

            var m = currPos.length;
            
            var ok = 1;
            var badindice = [];
            


            for(var j=1;j<Math.min(m,5);j++){
                var len = currPos[j].length;                
                var num = currPos[j].substring(3,len);
                var d = parseInt(num);
                if(PerftTest(j) != d){
                    ok = 0;
                    badindice.push(j);
                    
                } 
            }

            if(ok == 1){
                passed++;
                console.log("for " + i + "th pos all passed");
            }else{
                failed++;
                console.log("for " + i );
                console.log(badindice);
            }
            
        }

        console.log("Total passed " +  passed );
        console.log("Total failed " + failed);

        // console.log(file);

    })
    
    
}
