import { useState } from 'react';
import ProductPage from './ProductPage.js';

export default function CallBackApp() {
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <p>Use CallBack</p>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Dark mode
            </label>
            <hr />
            <ProductPage
                referrerId="wizard_of_oz"
                productId={123}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}
