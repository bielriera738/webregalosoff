import { giftsForMothers } from '../data/products';

export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    affiliateLink: string;
    rating: number;
    reviews: number;
}

interface AmazonConfig {
    accessKey: string;
    secretKey: string;
    partnerTag: string;
    region: string;
}

const config: AmazonConfig = {
    accessKey: import.meta.env.AMAZON_ACCESS_KEY || '',
    secretKey: import.meta.env.AMAZON_SECRET_KEY || '',
    partnerTag: import.meta.env.AMAZON_TAG || '',
    region: import.meta.env.AMAZON_REGION || 'eu-west-1',
};

/**
 * Fetches products from Amazon API or returns mock data if keys are missing.
 * @param keywords Search keywords (e.g., "gifts for mother")
 * @param limit Number of products to return
 * @returns Promise<Product[]>
 */
export async function searchProducts(keywords: string, limit: number = 20): Promise<Product[]> {
    // Check if API keys are present
    if (!config.accessKey || !config.secretKey || !config.partnerTag) {
        console.warn('Amazon API keys missing. Using mock data.');
        // In a real scenario, we might filter the mock data based on keywords
        // For now, we return the static list we have
        return Promise.resolve(giftsForMothers.slice(0, limit));
    }

    try {
        // TODO: Implement actual PA-API 5.0 call here
        // This would involve signing the request and parsing the response
        // For now, we simulate an API call that falls back to mock data
        // because we don't have the actual signing logic implemented yet.

        console.log(`Fetching products for "${keywords}" from Amazon API...`);

        // Placeholder for actual implementation
        return Promise.resolve(giftsForMothers.slice(0, limit));

    } catch (error) {
        console.error('Error fetching from Amazon API:', error);
        return [];
    }
}

/**
 * Fetches specific products by their ASINs.
 * @param asins Array of ASIN strings
 * @returns Promise<Product[]>
 */
export async function getProductsByAsins(asins: string[]): Promise<Product[]> {
    // Check if API keys are present
    if (!config.accessKey || !config.secretKey || !config.partnerTag) {
        console.warn('Amazon API keys missing. Using mock data for ASIN lookup.');
        // Filter mock data by ID (treating ID as ASIN for the mock)
        return Promise.resolve(
            giftsForMothers.filter(p => asins.includes(p.id))
        );
    }

    try {
        console.log(`Fetching details for ASINs: ${asins.join(', ')}`);
        // TODO: Implement PA-API 5.0 GetItems operation
        // const response = await amazonApi.getItems({ ItemIds: asins });
        // return mapResponseToProducts(response);

        // Fallback to mock for now until real implementation
        return Promise.resolve(
            giftsForMothers.filter(p => asins.includes(p.id))
        );
    } catch (error) {
        console.error('Error fetching ASINs:', error);
        return [];
    }
}
