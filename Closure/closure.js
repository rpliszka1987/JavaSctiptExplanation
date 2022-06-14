function pet() {
    const name = "Rocky";
    return function displayName() {
        console.log(name);
    }
}

const callName = pet();
callName();