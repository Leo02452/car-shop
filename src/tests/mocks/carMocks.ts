export const carId = {
  _id: "4edd40c86762e0fb12000003",
}

export const carBody = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const createdCar = {
  ...carId,
  ...carBody,
}

export const deletedCar = {
  ...createdCar
}

export const cardToUpdate = {
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}