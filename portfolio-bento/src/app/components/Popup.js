import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") { // Ensure we're in the browser
            const hasPopupShown = localStorage.getItem("popupShown");
            if (!hasPopupShown) {
                setVisible(true);
                localStorage.setItem("popupShown", "true");
            }
        }
    }, []);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 2000); // Popup will be visible for 5 seconds

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-darkNavy text-lg font-semibold mb-4">This is still being cooked &#58;&#41;</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full animate-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
