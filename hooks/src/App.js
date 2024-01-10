import logo from './logo.svg';
import './App.css';
import ChatApp from "./components/use-effect/ChatApp";
import BrowserEventApp from "./components/use-effect/BrowserEventApp";
import AnimationApp from "./components/use-effect/AnimationApp";
import DialogApp from "./components/use-effect/DialogApp";
import CounterApp from "./components/use-effect/CounterApp";



function App() {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        maxWidth: '600px', // Adjust this value based on your design
        margin: 'auto', // Center the grid horizontally
    };

    const componentStyle = {
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <ChatApp style={componentStyle} />
            {/*<BrowserEventApp style={componentStyle} />*/}
            <AnimationApp style={componentStyle} />
            <DialogApp/>
            <CounterApp/>
        </div>
    );
}

export default App;
