import api from './api';

export interface RecyclerProductListingPayload {
  name: string;
  category: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  maxRewardCoins?: number;
  stock: number;
  images: string[];
  specifications?: Array<{ key: string; value: string }>;
}

export const dealerProductService = {
  /**
   * Recycler lists a new product to be sold on Scrapwala Recycled Store
   */
  async listProduct(payload: RecyclerProductListingPayload): Promise<any> {
    const res = await api.post('/dealer/products', payload);
    return res.data.data;
  },
};
