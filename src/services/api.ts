import { ApiResponse, Program, Service } from '../../types';

const API_URL = 'http://localhost:3001/api';

export const api = {
    getPrograms: async (): Promise<Program[]> => {
        try {
            const res = await fetch(`${API_URL}/programs`);
            if (!res.ok) throw new Error('Network response was not ok');
            const json: ApiResponse<Program[]> = await res.json();
            return json.data;
        } catch (error) {
            console.error("Error fetching programs:", error);
            return [];
        }
    },
    getProgramBySlug: async (slug: string): Promise<Program | null> => {
        try {
            const res = await fetch(`${API_URL}/programs/${slug}`);
            if (!res.ok) {
                if (res.status === 404) return null;
                throw new Error('Network response was not ok');
            }
            const json: ApiResponse<Program> = await res.json();
            return json.data;
        } catch (error) {
            console.error(`Error fetching program ${slug}:`, error);
            return null;
        }
    },
    getServices: async (): Promise<Service[]> => {
        try {
            const res = await fetch(`${API_URL}/services`);
            if (!res.ok) throw new Error('Network response was not ok');
            const json: ApiResponse<Service[]> = await res.json();
            return json.data;
        } catch (error) {
            console.error("Error fetching services:", error);
            return [];
        }
    },
    getServiceBySlug: async (slug: string): Promise<Service | null> => {
        try {
            const res = await fetch(`${API_URL}/services/${slug}`);
            if (!res.ok) {
                if (res.status === 404) return null;
                throw new Error('Network response was not ok');
            }
            const json: ApiResponse<Service> = await res.json();
            return json.data;
        } catch (error) {
            console.error(`Error fetching service ${slug}:`, error);
            return null;
        }
    }
};
