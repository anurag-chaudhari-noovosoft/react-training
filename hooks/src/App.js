import logo from './logo.svg';
import './App.css';
import ChatApp from "./components/use-effect/ChatApp";
import BrowserEventApp from "./components/use-effect/BrowserEventApp";
import AnimationApp from "./components/use-effect/AnimationApp";
import DialogApp from "./components/use-effect/DialogApp";
import CounterApp from "./components/use-effect/CounterApp";
import UseReducer from "./components/user-reducer/UseReducer";
import CallBackApp from "./components/user-callback/CallBackApp";
import UseMemoBasicApp from "./components/use-memo/UseMemoBasicApp";
import PreservingAndResetting from "./components/preserving-and-resetting-state/PreservingAndResetting";



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
        <div>
            <div style={containerStyle}>
                <ChatApp style={componentStyle} />
                {/*<BrowserEventApp style={componentStyle} />*/}
                <AnimationApp style={componentStyle} />
                <DialogApp/>
                <CounterApp/>
                <UseReducer/>
                <CallBackApp/>
                <UseMemoBasicApp/>
                <PreservingAndResetting/>
            </div>
        </div>

    );
}

export default App;
