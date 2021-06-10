const Home = () => {
    
    const handleClick = () => {
        console.log("Console log");
    }

    const noClickMe = (name) => {
        console.log("Console log " + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={noClickMe}>No, click me</button>
        </div>
    );
}

export default Home;