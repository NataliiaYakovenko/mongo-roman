db.products.aggregate([
  {
    $lookup: {
      from: "manufacturers",
      localField: "manufacturerId",
      foreignField: "_id",
      as: "manufacturer",
    },
  },
  {
    $unwind: {
      path: "$manufacturer",
    },
  },
  {
    $unset: "manufacturerId",
  },
  {
    $group: {
      _id: "$manufacturer.name",
      productsQuantity: {
        $count: {},
      },
    },
  },
]);
