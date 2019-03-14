function Change(s, prog, version) {
    this.s = s;
    this.prog = prog;
    this.version = version;
    this.initObj = {
        "Program": "Primes", // remove program title 
        "Author": "g964",
        "Corporation":"Gold", // remove completely
        "Phone": "+1-503-555-0081",
        "Date": "2019-01-01",
        "Version": "6.7",
        "Level": "Alpha" // remove completely
    };
     this.changerFunction = function(){
        console.log(this.initObj);
    }
    this.setProg = function() {
        this.initObj.Program = this.prog;
    }
    this.printStats = function(){
        console.log(`${this.s}, ${this.prog}, & ${this.version} received.`);
    }
    
}
Change.prototype.update = (updateObj) =>{
    for(let key in updateObj){
        key === "Level" ? this.initObj.Level = "updated" : null;
    }
}