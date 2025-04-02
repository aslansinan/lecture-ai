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
        <div style={{padding: 24, textAlign: 'center', fontFamily: 'Arial, sans-serif'}}>
            <h2 style={{fontSize: '24px', marginBottom: '20px', color: '#1a202c'}}>Yapay Zeka ile Soru Üret</h2>
            <div style={{display: 'flex', justifyContent: 'center', gap: '12px'}}>
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Konu girin: örn. 5. sınıf doğal sayılar"
                    style={{
                        padding: '14px 16px',
                        width: '300px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        boxShadow: '0 0 4px rgba(0, 0, 0, 0.05)'
                    }}
                />
                <button
                    onClick={handleSend}
                    style={{
                        padding: '14px 24px',
                        backgroundColor: '#4f46e5',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4338ca')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4f46e5')}
                >
                    Gönder
                </button>
            </div>

            <div style={{marginTop: 24, fontSize: '18px', color: '#2d3748'}}>
                <strong>Cevap:</strong> {response}
            </div>
        </div>
    );
}
