/*
Mediator pattern = behaviioral ppattern that allows us to expose
a unified interface through which the differnt parts
of a system may communicate. =======> an object that coordinates
between multiple objects.
PROMOTES LOOSE COUPLING
Real world example - DOM even bubbling and event delegation. 
higher level object is given the responsibility of notifying subscribers about 
interaction events.

Event Aggregator - JQuery's 'on' method is the perfect example. 
You have a lot of DOM elements, that all can trigger from a click event,
and instead of having handlers for all the elements, there is just 1. 'on'.


*/

let mediator = {};

let orgChart = {

    addNewEmployee: function(){
        let employeeDetail = this.getEmployeeDetail();

        employeeDetail.on('complete', function(employee){
            let managerSelector = this.selectManager(employee);
            managerSelector.on('save', function(employee){
                employee.save();
            });
        });
    }
};
