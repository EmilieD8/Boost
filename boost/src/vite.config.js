import { defineConfig } from 'vite';

export default {
	server: {
	  host: '0.0.0.0', // This allows connections from external devices
	  port: 3000, // Make sure this matches the port you're using
	}
  }