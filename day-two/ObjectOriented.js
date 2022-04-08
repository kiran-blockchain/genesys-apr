class Profile {
    constructor(){
        this.usernmae="kiran";
        this.age=35;
    }
    getFullName(){
        return this.usernmae+this.age;
    }
}

const x = new Profile();
console.log(x.getFullName());
