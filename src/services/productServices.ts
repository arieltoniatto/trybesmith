import ProductModel from '../models/productModel';
import IProduct from '../interfaces/productInterface';
import connection from '../models/connection';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }
}

export default ProductService;