import Login from "./components/form/Login.jsx";
import Register from "./components/form/Register.jsx";

function App() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
                <Register/>
            </div>
        </div>
    );
}

export default App;