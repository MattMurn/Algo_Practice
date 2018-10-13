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

ObserverList = () => {
    this.ObserverList = [];
    add: obj => this.ObserverList.push(obj);
    count: () => this.ObserverList.length;
    get: index => {
        if(index > -1 && index < this.ObserverList.length){
            return this.ObserverList[index];
        }
    };
    indexof: (obj, startIndex) => {
        let i = startIndex;
        while(i < this.ObserverList.length){
            if(this.ObserverList[i] === obj){
                return i;
            }
            i++;
        }
        return -1;
    }
    removeAt: index => {
        this.ObserverList.splice(index, 1);
    }
};

Subject = () => {
    this.observers = new ObserverList();
    addObserver = observer => this.observers.add(observer);
    removeObserver = observer => this.observers.removeAt(this.observers.indexof(observer));
    notify = context => {
        let observerCount = this.observers.count();
        for(let i = 0; i < observerCount; i++){
            this.observers.get(i).update(context);
        }
    }
}

Observer = () => {
    this.update = () => {

    }
}
//mapping key to "extended" object
extend = (obj, extension) => {
    for(var key in extenstion){
        obj[key] = extension[key];
    }
}

let controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observerContainer')

extend(controlCheckbox, new Subject());

controlCheckbox.onclick = () => {
    controlCheckbox.notify(controlCheckbox.checked);
}

addBtn.onclick = addNewObserver;

addNewObserver = () => {
    let check = document.createElement('input');
    check.type = 'checkbox';

    extend(check, new Observer());
    check.update = value => this.checked = value;
    controlCheckbox.addObserver(check);
    container.appendChild(check);
}


console.log("This is the observer pattern script")