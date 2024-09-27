
export default function FunctionsPage(){
    function helloWorld(username, dayOfWeek){
        // return "Hello World! Welcome back " + username + ", today is " + dayOfWeek;
        return`Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return`Hello World! Welcome back ${username}, today is ${dayOfWeek}`; 
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a,b) => a+b;

    const louder = (textFunc, username) => {
        let thisText = textFunc(username);
        return `${thisText.toUpperCase()}!!!!`
    }

    return(
        <main className="p-5">
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Friday")}</p>
            <p>{helloWorld2("Frank", "Thursday")}</p>
            <p>{helloWorld3("Tom")}</p>
            <p>{helloMath(3,4)}</p>
            <h2>Higher Order Functions</h2>
            <p>{louder(helloWorld3, "Robert")}</p>
        </main>
    );
}