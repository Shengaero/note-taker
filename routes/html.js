const path = require('path');
const router = require('express').Router();

// GET /
router.get('/', (_, res) =>
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
);

// GET /notes
router.get('/notes', (_, res) =>
    res.sendFile(path.join(process.cwd(), 'public', 'notes.html'))
);

module.exports = router;
