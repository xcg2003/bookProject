import pool from './db.js'; // Ensure this matches your db.js path

async function testConnection() {
    try {
        const res = await pool.query('SELECT NOW()'); // Simple query to test connection
        console.log('Database connected successfully at:', res.rows[0].now);
    } catch (err) {
        console.error('Database connection error:', err);
    } finally {
        await pool.end(); // Close the connection
    }
}

testConnection();
