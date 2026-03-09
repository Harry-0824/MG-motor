import React, { useEffect, useState } from 'react';
import { getModels } from '../../services/api';

const Models = () => {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await getModels();
                // 假設後端回應格式為 { success: true, data: [...] } 或直接是 [...]
                setModels(response.data || response);
                setLoading(false);
            } catch (err) {
                setError('無法取得車型資訊，請稍後再試。');
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

    if (loading) return <div>載入中...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>MG 車系介紹</h1>
            <p>在這裡您可以找到我們最新的車系資訊。</p>
            {models.length > 0 ? (
                <ul>
                    {models.map(model => (
                        <li key={model.id}>
                            <strong>{model.name}</strong> - {model.slug || '動感時尚'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>目前沒有可用的車系資訊。</p>
            )}
        </div>
    );
};

export default Models;