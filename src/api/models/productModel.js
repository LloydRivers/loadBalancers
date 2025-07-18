import { db, pgp } from "../database/db.js";

export const insertProducts = async (products) => {
  const columns = new pgp.helpers.ColumnSet(
    [
      "id",
      "title",
      "description",
      "price",
      "discount_percentage",
      "rating",
      "stock",
      "brand",
      "category",
      "thumbnail",
    ],
    { table: "products" }
  );

  const insertQuery = pgp.helpers.insert(products, columns);
  return db.none(insertQuery);
};

export const fetchAllProducts = async () => {
  return await db.any("SELECT * FROM products ORDER BY id ASC");
};

export const fetchProductById = async (id) => {
  return await db.oneOrNone("SELECT * FROM products WHERE id = $1", [id]);
};
