import Alert from 'react-bootstrap/Alert';

const Alerts = ({ color, children }) => {
    return (
        <>
            <Alert key={color} variant={color}>{children}</Alert>
        </>
    );
};

export default Alerts;
