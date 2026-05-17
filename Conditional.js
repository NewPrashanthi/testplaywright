function launch (browserName) {
     
    if (browserName=="chrome") {
        console.log("used server is chrome")
    }
   else {
    console.log("selected server is not chrome")
   }
} 
launch("chrome");

// Function using switch case

function runtest(testtype) {
    
    switch (testtype) {
        case "smoke":
            console.log("running smoke test")
            break;
        case "sanity":
            console.log("running sanity test")
            break;
        case "regression":
            console.log("running regression test")
            break;
        default:
            console.log("not in mentioned")
            break;
    }
    
} runtest(sanity);