module.exports = (express) => {
    const router = express.Router();
    
    router.get('/', (req, res) => {
        res.send('Hello World');
    });

    router.get('/status', (req, res) => {
        res.json({
            healthy: true,
        });
    });

    router.post('/echo', (req, res) => {
        console.log(req.body);
        res.json(req.body);
    });

    return router;
};