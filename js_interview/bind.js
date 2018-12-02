/* 
what does the bind method do??
    the bind method applies context using the this keyword.
    It allows instances of object to have the correct scope when
    using a method. If not bound by this... this defaults to functional scope
    bind a function to a certain this context.
    define parameters that you want to hold constant.
    */
this.distance = 10000;

const roadTrip1 = {
    distance: 3000, 
    getDistance: function(){
        return this.distance;
    }
};
const roadTrip2 = {
    distance: 5000
}
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2);

// getTripDistance.bind(roadTrip1);


console.log(getTripDistance());



