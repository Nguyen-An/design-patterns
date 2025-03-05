/**
 * Design Patterns - #2 - Observer Pattern
 * Độ khó khi học: 3
 * Sử dụng dự án: 5
 * Ứng dụng phần mềm: DOTA 2, IPHONE 14
 * Ứng dụng cuộc sống: Giao thông, Pre Order
 * Gửi thông báo đến tất cả nhân vật trong team
*/

class Observer {
    constructor(name) {
        this.namePick = name;
    }

    updateStatus(location) {
        this.goToHelp(location);
    }

    goToHelp(location) { 
        console.log(`${this.namePick} is going to help at ${JSON.stringify(location)}`);
    }
}

class Subject {
    constructor() {
        this.observerList = [];
    }

    addObserver(observer) {
        this.observerList.push(observer);
    }

    notify(location) {
        this.observerList.forEach((observer) => {
            observer.updateStatus(location);
        });
    }
}

const subject = new Subject()

// your pick
const yasuo = new Observer('Yasuo')
const maphite = new Observer('Maphite')
const zed = new Observer('Zed')

// add to team
subject.addObserver(yasuo)
subject.addObserver(maphite)
subject.addObserver(zed)

// push location to team
subject.notify({long: 123, lat: 345})