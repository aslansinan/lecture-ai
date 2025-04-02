import { useState } from 'react';
import axios from 'axios';

export default function TopicInput() {
    const [topic, setTopic] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        if (topic.trim() === '') return;

        try {
            const res = await axios.post('https://lecture-ai-backend.onrender.com/generate-question', {
                topic,
            });
            setResponse(res.data.response);
        } catch (err) {
            console.error("API Hatası:", err);
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <h2>Yapay Zeka ile Soru Üret</h2>
            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Konu girin: örn. 5. sınıf doğal sayılar"
            />
            <button onClick={handleSend}>Gönder</button>

            <div style={{ marginTop: 16 }}>
                <strong>Cevap:</strong> {response}
            </div>
        </div>
    );
}
