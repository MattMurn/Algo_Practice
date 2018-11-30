/* where an object (Subject) maintains a list of objects
depending on it, automatically notifying them of any
state change. 
when a change occurs, the observer sends out a message
"broadcasts" a notification to the observers.
if the observer no longer wants to be updated, remove 
it from the list.
Observer Components:
    Subject: maintains a list of observers. acts as admin
    Observer: provides an update interface for objects that 
    are notified of a Subject's change(s) of state
    ConcreteSubject: broadcasts notifications to observers on
    changes of state, stores the state of ConcreteObservers
    ConcreteObserver: stores reference to the ConcreteSubject,
    implements an update interface for the Observer to ensure 
    state is consistent with the Subject's  
*/

function ObserverList() {
    this.ObserverList = [];
};
ObserverList.prototype.add = function(obj) {
    return this.ObserverList.push(obj);
} 
ObserverList.prototype.count = () => this.ObserverList.length;
ObserverList.prototype.get = index => {
    if(index > -1 && index < this.ObserverList.length){
        return this.ObserverList[index];
    }
};
ObserverList.prototype.indexOf = (obj, startIndex) => {
    let i = startIndex;
    while(i < this.ObserverList.length){
        if(this.ObserverList[i] === objc){
            return i;
        }
        i++;
    }
    return -1;
}
ObserverList.prototype.removeAt = index => {
    this.ObserverList.splice(index, 1);
}

function Subject() {
    this.observers = new ObserverList();
}
Subject.prototype.addObserver = observer => this.observers.add(observer);
Subject.prototype.removeObserver = observer => this.observers.removeAt(this.observers.indexof(observer));
Subject.prototype.notify = function(context) {
    let observerCount = this.observers.count();
    for(let i = 0; i < observerCount; i++){
        this.observers.get(i).update(context);
    }
}

function Observer() {
    this.update = () => {

    }
}
//mapping key to "extended" object
extend = (obj, extension) => {
    for(var key in extension){
        obj[key] = extension[key];
    }
}

let controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observerContainer')

extend(controlCheckbox, new Subject());

controlCheckbox.onclick = function() {
    // controlCheckbox.addObserver('djfsld');
    controlCheckbox.notify(controlCheckbox.checked);
}

addBtn.onclick = addNewObserver;

function addNewObserver() {
    console.log("ASDDDDD")
    let check = document.createElement('input');
    check.type = 'checkbox';
    extend(check, new Observer());
    check.update = value => this.checked = value;
    // controlCheckbox.addObserver(check);
    container.appendChild(check);
}


console.log("This is the observer pattern script")