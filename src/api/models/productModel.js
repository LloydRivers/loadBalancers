import { db, pgp } from "../database/db.js";

const insertProducts = async (products) => {
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

export default insertProducts;
