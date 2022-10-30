
function App() {
    return (
        <div> 
            <h1>Hello</h1>
            <Food fav="kimchi" />
            <Food fav="Ramen" />
            <Food fav="SamGyupSal" />
            <Food fav="ChuKkuMi" />
        </div>
        );
}

function Food({fav}) {
    return <h1> I Like { fav } </h1>;
}

export default App;
