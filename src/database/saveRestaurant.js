function saveRestaurant(db, restaurant){
    return db.run(`
    INSERT INTO restaurants (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${restaurant.lat}",
        "${restaurant.lng}",
        "${restaurant.name}",
        "${restaurant.about}",
        "${restaurant.whatsapp}",
        "${restaurant.images}",
        "${restaurant.instructions}",
        "${restaurant.opening_hours}",
        "${restaurant.open_on_weekends}"
    );
`);
}

module.exports = saveRestaurant;