const Database = require("./db");
const saveRestaurant = require("./saveRestaurant");

Database.then(async (db) => {
  //inserir dados na tabela
  // await saveRestaurant(db, {
  //   lat: "-27.234733",
  //   lng: "-49.6557974",
  //   name: "Lar dos anjinhos",
  //   about:
  //     "Presta assistência a crianças de 06 a 10 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "456456",
  //   images: [
  //     "https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //     "https://images.unsplash.com/photo-1600720665043-3c088759e359?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas Das 09h até 16h",
  //   open_on_weekends: "0",
  // });

  //consultar dados da tabela
  // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  // console.log(selectedOrphanages);

  // //consultar somente 1 orfanato, pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage);

  // //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
