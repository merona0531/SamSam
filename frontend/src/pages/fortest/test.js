import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const sendData = async () => {
        try {
            // 새로운 ngrok URL로 변경
            const response = await axios.post('https://e2a9-34-145-156-197.ngrok-free.app/analyze', {
                text: input,
            });
            setResult(response.data.analysis);  // 서버에서 받은 분석 결과 저장
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div>
            <h1>Data Analysis App</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text"
            />
            <button onClick={sendData}>Analyze</button>
            {result && <p>Analysis Result: {result}</p>}
        </div>
    );
}

export default App;
