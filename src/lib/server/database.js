
import postgres from 'postgres';

// Static environment variable access
import { PGCONNECT } from '$env/static/private';

// Create a connection using the PGCONNECT string
const sql = postgres(PGCONNECT, {});

export default sql;
