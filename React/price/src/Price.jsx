import React from 'react';

function PriceCard({ title, price, features }) {
    return (
        <div className="card price-card">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <h1 className="card-text price">{price}</h1>
                <ul className="list-group list-group-flush features">
                    {features.map((feature, index) => (
                        <li key={index} className="list-group-item">{feature}</li>
                           
                    ))}
                </ul>
                <button className="btn btn-primary buy-button">BUTTON</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container price-cards-container">
            <div className="row">
                <div className="col-md-4">
                    <PriceCard
                        title="FREE"
                        price="$ 0 / month"
                        features={[
                            '> Single User',
                            '> 50GB Storage',
                            '> Unlimited Public Projects',
                            '> Community Access',
                            'x Unlimited Private Projects',
                            'x Dedicated Phone Support',
                            'x Free Subdomain',
                            'x Monthly Status Reports'
                        ]}
                    />
                </div>
                <div className="col-md-4">
                    <PriceCard
                        title="PLUS"
                        price="$ 9 / month"
                        features={[
                            '> 5 Users',
                            '> 50GB Storage',
                            '> Unlimited Public Projects',
                            '> Community Access',
                            '. Unlimited Private Projects',
                            '> Dedicated Phone Support',
                            '> Free Subdomain',
                            'x Monthly Status Reports'
                        ]}
                    />
                </div>
                <div className="col-md-4">
                    <PriceCard
                        title="PRO"
                        price="$ 49 / month"
                        features={[
                            '> Unlimited Users',
                            '> 50GB Storage',
                            '> Unlimited Public Projects',
                            '> Community Access',
                            '> Unlimited Private Projects',
                            '> Dedicated Phone Support',
                            '> Free Subdomain',
                            '> Monthly Status Reports'
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;