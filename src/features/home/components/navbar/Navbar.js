import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
    // Logo
    const Logo = useCallback(() => {
        return <div>Pandanarum</div>;
    }, []);

    // Time
    const Tanggal = useCallback(function Tanggal() {
        const currentDate = new Date();
        const [timerNow, setTimerNow] = useState(currentDate.toLocaleTimeString());
        setInterval(async () => {
            const currentDate = new Date();
            setTimerNow(currentDate.toLocaleTimeString());
        }, 1000);
        return <div>{timerNow}</div>;
    }, []);

    // Login
    const Button = () => {
        const currentState = useSelector((state) => state.global_slice.isLogin);
        return <button>{currentState ? "Logout" : "Login"}</button>;
    };

    return (
        <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-3">
                <Button />
                <Tanggal />
            </div>
        </div>
    );
}

export default Navbar;
