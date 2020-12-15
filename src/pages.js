const Database = require("./database/db");
const saveRestaurant = require("./database/saveRestaurant");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async restaurant(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM restaurants WHERE id = "${id}"`
      );
      const restaurant = results[0];

      restaurant.images = restaurant.images.split(",");
      restaurant.firstImage = restaurant.images[0];

      if (restaurant.open_on_weekends == "0") restaurant.open_on_weekends = false;
      else restaurant.open_on_weekends = true;

      return res.render("restaurant", { restaurant: restaurant });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  async restaurants(req, res) {
    try {
      const db = await Database;
      const restaurants = await db.all("SELECT * FROM restaurants");
      return res.render("restaurants", { restaurants });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createRestaurant(req, res) {
    return res.render("create-restaurant");
  },

  async saveRestaurant(req, res) {
    const fields = req.body;

    //validar se todos os campos estão preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      //salvar um orfanato
      const db = await Database;
      await saveRestaurant(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });
      //redirecionamento
      return res.redirect("/restaurants");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};
